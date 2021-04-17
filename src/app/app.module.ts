import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { NavegacaoModule } from './navegacao/navegacao.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AutenticacaoModule,
    NavegacaoModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production, registrationStrategy: 'registerWhenStable:30000'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
