import { TestBed } from '@angular/core/testing';

import { RvoitureService } from './rvoiture.service';

describe('RvoitureService', () => {
  let service: RvoitureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RvoitureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
