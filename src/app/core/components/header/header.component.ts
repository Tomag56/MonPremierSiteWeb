import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit{
  name!: string;
  home!: string;
  parcours!: string;
  travaux!: string;
  contacter!: string;

  isChecked = true;
  formGroup = this._formBuilder.group({
    enablelight: '',
    acceptTerms: ['', Validators.requiredTrue],
  });


  ngOnInit(): void {
    this.name= "Thomas Granger";
    this.home= "Accueil";
    this.parcours = "{ { monParcours } }";
    this.travaux= "mesProjets[ ]"
    this.contacter= "Contact( )"
  }

  constructor(private _formBuilder: FormBuilder) {}

  onFormSubmit() {
    alert(JSON.stringify(this.formGroup.value, null, 2));
  }
}

