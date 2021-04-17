import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './navegacao/index/index.component';
import { LoginComponent } from './autenticacao/login/login.component';
import { RecuperarsenhaComponent } from './autenticacao/recuperarsenha/recuperarsenha.component';
import { RegistrarusuarioComponent } from './autenticacao/registrarusuario/registrarusuario.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent} ,
  {path: 'index', component: IndexComponent} ,
  {path: 'recuperarsenha', component: RecuperarsenhaComponent},
  {path: 'registrarusuario', component: RegistrarusuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
