import { Component, OnInit } from '@angular/core';
import { validar_genero } from "../validarGenero/validarGenero";
import { validar_edad } from "../validarEdad/validarEdad";
import { calcular_imc } from "../formula/formula";
import { validar_diagnostico } from "../diagnostico/diagnostico";
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ImcModel } from '../models/imcs.model';

@Component({
  selector: 'app-gui',
  templateUrl: './gui.component.html',
  styleUrls: ['./gui.component.css']
})
export class GuiComponent implements OnInit {

  imcs:ImcModel = new ImcModel();  
  myDate = new Date();
  arrImcs = [];

  altura = null;
  peso = null;
  edad = null;
  genero = null;
  imc = 0;
  result = null;
  mostrar_diag = false;
  diagnostico = "";

  constructor(private auth: AuthService, private router: Router) {
    this.getImc();
  }

  ngOnInit(): void {
  }

  validar_edad(){
    let mi_res = null;
    mi_res = validar_edad(this.peso);
    this.edad = mi_res;
  }

  btn_calcular(){
    let mi_res = null;
    mi_res = calcular_imc(this.peso,this.altura);
    this.validar_genero();
    this.validar_diagnostico();
    this.imc = mi_res;
    this.mostrar_diag = true;
  }

  validar_diagnostico(){
    let mi_res = null;
    mi_res = validar_diagnostico(this.imc);
    this.diagnostico = mi_res;
  }

  validar_genero(){
    let mi_res = null;
    mi_res = validar_genero(this.genero);
    this.genero = mi_res;
  }

  insertar(){
    this.mostrar_diag = true;
    let resul = null;
    resul = calcular_imc(this.peso, this.altura);
    this.validar_diagnostico();
    this.imc = resul;
    this.imcs.idUser = Number(localStorage.getItem('ident'));
    this.imcs.resultado = String(this.imc.toFixed(1));
    this.imcs.fecha = `${this.myDate.getDate()}/${this.myDate.getMonth()+1}/${this.myDate.getFullYear()} ${this.myDate.getHours()}:${this.myDate.getMinutes()}`;
    this.auth.insertImc(this.imcs).subscribe( resp =>{
      resp;
    });
  }

  getImc(){
    this.auth.getImcs(localStorage.getItem('ident')).subscribe((imcRes: any)=>{
       this.arrImcs = imcRes;
    });
   }

  exit(){
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

}