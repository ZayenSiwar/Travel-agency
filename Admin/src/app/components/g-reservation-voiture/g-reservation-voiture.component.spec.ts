import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GReservationVoitureComponent } from './g-reservation-voiture.component';

describe('GReservationVoitureComponent', () => {
  let component: GReservationVoitureComponent;
  let fixture: ComponentFixture<GReservationVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GReservationVoitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GReservationVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
