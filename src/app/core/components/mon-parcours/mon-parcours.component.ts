import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-parcours',
  templateUrl: './mon-parcours.component.html',
  styleUrls: ['./mon-parcours.component.scss']
})
export class MonParcoursComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
