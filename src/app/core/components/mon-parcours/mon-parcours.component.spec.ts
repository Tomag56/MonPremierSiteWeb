import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonParcoursComponent } from './mon-parcours.component';

describe('MonParcoursComponent', () => {
  let component: MonParcoursComponent;
  let fixture: ComponentFixture<MonParcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonParcoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
