import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from "./shared/shared.module";
import {HomePageComponent} from "./core/components/home-page/home-page.component";
import {CoreModule} from "./core/core.module";
import {MonParcoursComponent} from "./core/components/mon-parcours/mon-parcours.component";
import {ContactComponent} from "./core/components/contact/contact.component";
import {MesProjetsComponent} from "./core/components/mes-projets/mes-projets.component";


const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path:"mon-parcours", component: MonParcoursComponent },
  {path:"mes-projets", component: MesProjetsComponent },
  {path:"contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    SharedModule,
    CoreModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
