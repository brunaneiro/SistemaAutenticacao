import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports:[
    MenuComponent,
    FooterComponent
  ]
})
export class ShareModule { }
