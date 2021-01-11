import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImcModel } from '../models/imcs.model';
import { catchError, map, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { UsuarioModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private url = "https://jago-imc-api.herokuapp.com/api";
    

    userToken: String;

  constructor( private http: HttpClient ) {
    this.readToken();
   }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`  

    })
  }  


  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('ident');
    localStorage.removeItem('name');
  }
  
  login( usuario: UsuarioModel ){
    const authData = {
      username: usuario.email,
      password: usuario.password
    };

    return this.http.post(
      `${this.url}/auth/signin`, 
      authData
      ).pipe(
        map( resp =>{
          this.saveToken(resp['accessToken']);
          this.saveId(resp['idUser']);
          this.saveName(resp['name']);
          return resp;
        } )
      );
  }

  signup(usuario: UsuarioModel){
    
    const authData = {
      name: usuario.name,
      email: usuario.email,
      role: ["admin"],
      password: usuario.password,
    };

    return this.http.post(
      `${this.url}/auth/signup`, 
      authData
      ).pipe(
        map( resp =>{
          this.saveToken(resp['accessToken']);
          this.saveId(resp['idUser']);
          this.saveName(resp['name']);
          return resp;
        } )
      );
  }

  private saveToken(idToken: string){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  private saveId(id: string){
    localStorage.setItem('ident', id);
  }

  private saveName(name: string){
    localStorage.setItem('name', name);
  }

  readToken(){
    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = "";
    }
  }

  isAuth(): boolean{
    this.readToken()
    return this.userToken.length > 2;
  }

  insertImc(imcApi): Observable<ImcModel> {

    return this.http.post<ImcModel>(this.url + '/imcs', JSON.stringify(imcApi), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.MessageError)
    )
  }
  

  getImcs(id): Observable<ImcModel> {
    id = Number(id);
    return this.http.get<ImcModel>(this.url + '/imcs?idUser=' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.MessageError)
    )
  } 

  
  
  MessageError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      alert(errorMessage);
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }


}


