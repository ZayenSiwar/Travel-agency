import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleReservationComponent } from './detaille-reservation.component';

describe('DetailleReservationComponent', () => {
  let component: DetailleReservationComponent;
  let fixture: ComponentFixture<DetailleReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailleReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
