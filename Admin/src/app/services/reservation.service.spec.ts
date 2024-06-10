import { TestBed } from '@angular/core/testing';

import { ReservationService } from './reservation.service';

describe('ReservationClientService', () => {
  let service: ReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
