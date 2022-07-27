import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import { MonParcoursComponent } from './components/mon-parcours/mon-parcours.component';
import { FooterComponent } from './components/footer/footer.component';
import {NgxTypedJsModule} from "ngx-typed-js";
import  {FontAwesomeModule}  from  '@fortawesome/angular-fontawesome' ;
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatExpansionModule} from "@angular/material/expansion";
import { ContactComponent } from './components/contact/contact.component';
import {MatListModule} from "@angular/material/list";
import { MesProjetsComponent } from './components/mes-projets/mes-projets.component';




@NgModule({
  declarations: [
    HomePageComponent,
    MonParcoursComponent,
    FooterComponent,
    ContactComponent,
    MesProjetsComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgxTypedJsModule,
    FontAwesomeModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
  ],

  exports: [
    FooterComponent
  ],
})
export class CoreModule{ }
