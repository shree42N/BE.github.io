import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShairedRoutingModule } from './shaired-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ShairedRoutingModule
  ]
})
export class ShairedModule { }
