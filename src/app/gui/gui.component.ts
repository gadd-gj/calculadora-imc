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

  genero = null;
  edad = null;
  altura = null;
  peso = null;
  imc = 0;
  tabla_diag = false;
  tabla_ad = false;
  diagnostico = "";

  constructor() { }

  ngOnInit(): void {
  }

  validar_genero(){
    let resultado=null;
    resultado = validar_genero(this.genero);
    this.genero=resultado;
  }

  validar_edad(){
    let resultado=null;
    resultado = validar_edad(this.edad);
    this.edad=resultado;
  }

  calcular_imc(){
    let resultado = 0;
    resultado = calcular_imc(this.peso,this.altura);
    this.mostrar_tabla();
    this.imc = resultado;
    this.validar_diagnostico();
  }

  mostrar_tabla(){
    
    this.tabla_diag = true;
    
  }

  mostrar_tabla_ad(){

    this.edad = validar_edad(this.edad);
    if (this.edad == false) {
      this.tabla_ad = true;
    }
  }

  validar_diagnostico(){
    let resultado = null;
    resultado = validar_diagnostico(this.imc);
    this.diagnostico = resultado;
  }

}