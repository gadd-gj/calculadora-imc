import { Component, OnInit } from '@angular/core';
import { validar_genero } from "../validarGenero/validarGenero";
import { validar_edad } from "../validarEdad/validarEdad";
import { calcular_imc } from "../formula/formula";
import { validar_diagnostico } from "../diagnostico/diagnostico";


@Component({
  selector: 'app-gui',
  templateUrl: './gui.component.html',
  styleUrls: ['./gui.component.css']
})
export class GuiComponent implements OnInit {

  altura = null;
  peso = null;
  edad = null;
  genero = null;
  imc = 0;
  result = null;
  mostrar_diag = false;
  diagnostico = "";

  constructor() { }

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


}