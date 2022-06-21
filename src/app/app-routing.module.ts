import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from "./shared/shared.module";
import {HomePageComponent} from "./core/components/home-page/home-page.component";
import {CoreModule} from "./core/core.module";
import {MonParcoursComponent} from "./core/components/mon-parcours/mon-parcours.component";


const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path:"mon-parcours", component: MonParcoursComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    SharedModule,
    CoreModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
