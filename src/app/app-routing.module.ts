import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { GuiComponent } from './gui/gui.component';


const routes: Routes = [
	{path: '', component:LandingPageComponent },
	{path:'landing-page',component: LandingPageComponent},
	{path:'login', component: LoginComponent},
	{path:'sign-in',component: SignInComponent},
	{path: 'gui', component: GuiComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
