import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../models/user.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;
  remenber = false;

  constructor(private auth: AuthService, private router: Router ) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();

    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
      this.remenber = true;
    }
  }

  login(form: NgForm){
    if (form.invalid) {
      return;
    }
  
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por Favor ...',
    });
    Swal.showLoading();

    this.auth.login(this.usuario).subscribe(
      resp =>{
        Swal.close();

        if (this.remenber) {
          localStorage.setItem('email', this.usuario.email);
        }

        this.router.navigateByUrl('/gui');
      },(error) => {
        Swal.fire({
          icon: 'error',
          title: 'Al Autenticar',
          text: "Usuario o Contraseña Invalidos",
        });
      }
    );

  }

}
