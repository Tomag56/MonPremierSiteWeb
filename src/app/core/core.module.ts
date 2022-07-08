import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './components/home-page/home-page.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import { MonParcoursComponent } from './components/mon-parcours/mon-parcours.component';
import { FooterComponent } from './components/footer/footer.component';
import {NgxTypedJsModule} from "ngx-typed-js";
import  {FontAwesomeModule}  from  '@fortawesome/angular-fontawesome' ;




@NgModule({
  declarations: [
    HomePageComponent,
    MonParcoursComponent,
    FooterComponent

  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgxTypedJsModule,
    FontAwesomeModule,

  ],

  exports: [

    FooterComponent

  ],
})
export class CoreModule{ }
