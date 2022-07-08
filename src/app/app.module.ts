import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from "./core/core.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {SharedModule} from "./shared/shared.module";
import {NgxTypedJsModule} from "ngx-typed-js";
import {LayoutModule} from "@angular/cdk/layout";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      CoreModule,
      FontAwesomeModule,
      SharedModule,
      NgxTypedJsModule,
      LayoutModule,
      MatIconModule


    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
