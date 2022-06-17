import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name!: string;
  home!: string;
  parcours!: string;
  travaux!: string;
  contacter!: string;

  ngOnInit(): void {
    this.name= "Thomas Granger";
    this.home= "Accueil";
    this.parcours = "Mon Parcours";
    this.travaux= "Mes Projets"
    this.contacter= "Contact"
  }

}
