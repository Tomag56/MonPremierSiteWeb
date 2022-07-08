import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from "./core/core.module";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from "./shared/shared.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {LayoutModule} from "@angular/cdk/layout";


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
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatDialogModule,
        FormsModule,
        LayoutModule
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
