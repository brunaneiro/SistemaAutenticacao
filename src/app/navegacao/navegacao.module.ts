import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';

import { ShareModule } from '../share/share.module'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ShareModule
  ]
})
export class NavegacaoModule { }
