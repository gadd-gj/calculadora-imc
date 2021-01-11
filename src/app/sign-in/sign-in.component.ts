import { Component, OnInit } from '@angular/core';

import { UsuarioModel } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  usuario: UsuarioModel = new UsuarioModel();

  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por Favor ...',
    });
    Swal.showLoading();

    this.auth.signup(this.usuario).subscribe(
      resp =>{
        Swal.close();
        this.router.navigateByUrl('/gui');
      },(error)=>{
        
        Swal.fire({
          icon: 'error',
          title: 'Al Autenticar',
          text: error.error.message,
        });
      }
    );

  }


