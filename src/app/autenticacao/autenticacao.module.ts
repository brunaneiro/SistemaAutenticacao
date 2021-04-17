import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';
import { RecuperarsenhaComponent } from './recuperarsenha/recuperarsenha.component';
import { RegistrarusuarioComponent } from './registrarusuario/registrarusuario.component';

@NgModule({
  declarations: [
    LoginComponent,
    RecuperarsenhaComponent,
    RegistrarusuarioComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    PasswordModule
  ],
  exports:[
    LoginComponent
  ]
})
export class AutenticacaoModule { }
