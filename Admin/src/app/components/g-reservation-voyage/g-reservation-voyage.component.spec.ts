import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GReservationVoyageComponent } from './g-reservation-voyage.component';

describe('GReservationVoyageComponent', () => {
  let component: GReservationVoyageComponent;
  let fixture: ComponentFixture<GReservationVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GReservationVoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GReservationVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
