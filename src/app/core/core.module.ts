import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import { HomePageComponent } from './components/home-page/home-page.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule, RouterOutlet} from "@angular/router";
import { MonParcoursComponent } from './components/mon-parcours/mon-parcours.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    MonParcoursComponent

  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule

  ],

  exports: [
HeaderComponent

  ],
})
export class CoreModule{ }
