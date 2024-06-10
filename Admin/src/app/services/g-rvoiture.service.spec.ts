import { TestBed } from '@angular/core/testing';

import { GRvoitureService } from './g-rvoiture.service';

describe('GRvoitureService', () => {
  let service: GRvoitureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GRvoitureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
