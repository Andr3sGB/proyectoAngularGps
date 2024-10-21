import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/autenticar/signin/signin.component';
import { SignupComponent } from './components/autenticar/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  {path: 'producto/:id', component:ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
