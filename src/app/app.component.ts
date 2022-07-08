import {Component, EventEmitter, HostBinding, OnInit, Output,} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit{
  // formGroup = this._formBuilder.group({
  //   enablelight: '',
  //   acceptTerms: ['', Validators.requiredTrue],
  // });
  @HostBinding('class') className = '';
  toggleControl = new FormControl(false);


  title = 'MonPremierSIteWeb';
  // Pour la sidebar

  //Switch light back
  @Output() public sidenavToggle = new EventEmitter();
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }



  ngOnInit(): void {

    //Switch light back
    this.toggleControl.valueChanges.subscribe((lightMode) => {
      const lightClassName = 'light-theme';
      const darkClassName = 'dark-theme';
      this.className = lightMode ? lightClassName : darkClassName;
    });


  }
  // constructor(private _formBuilder: FormBuilder) {}

  // onFormSubmit() {
  //   alert(JSON.stringify(this.formGroup.value, null, 2));
  // }


}

