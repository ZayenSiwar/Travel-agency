import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionvoitureComponent } from './gestionvoiture.component';

describe('GestionvoitureComponent', () => {
  let component: GestionvoitureComponent;
  let fixture: ComponentFixture<GestionvoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionvoitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionvoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
