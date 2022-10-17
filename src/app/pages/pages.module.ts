import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from '../shaired/header/header.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { BrandSectionComponent } from './brand-section/brand-section.component';
import { LatestArrivalComponent } from './latest-arrival/latest-arrival.component';
import { PopularProductComponent } from './popular-product/popular-product.component';
import { FooterComponent } from '../shaired/footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
     HeaderComponent,
     SectionOneComponent,
     BrandSectionComponent,
     LatestArrivalComponent,
     PopularProductComponent,
     FooterComponent,
     AboutUsComponent
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
