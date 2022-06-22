import {Component, OnInit} from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ['Junior',  "Junior", "Web", "Java", "TypeScript", "NodeJS", "Angular",'Junior',"Web", "Java", "TypeScript", "NodeJS", "Angular",'Junior',"Web", "Java", "TypeScript", "NodeJS", "Angular",'Junior',"Web", "Java", "TypeScript", "NodeJS", "Angular",'Junior', "Web", "Java", "TypeScript", "NodeJS", "Angular",'Junior',"Web", "Java", "TypeScript", "NodeJS", "Angular",'Junior',],
      typeSpeed: 150
    };
    const typed: object = new Typed('.wt', options);
  }
}
