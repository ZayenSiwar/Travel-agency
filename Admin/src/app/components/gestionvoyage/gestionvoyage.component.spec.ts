import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionvoyageComponent } from './gestionvoyage.component';

describe('GestionvoyageComponent', () => {
  let component: GestionvoyageComponent;
  let fixture: ComponentFixture<GestionvoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionvoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionvoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
