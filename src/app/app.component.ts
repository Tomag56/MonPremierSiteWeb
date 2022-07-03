import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MonPremierSIteWeb';
  // Pour la sidebar
  showFiller = false;
  @Output() public sidenavToggle = new EventEmitter();
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}

