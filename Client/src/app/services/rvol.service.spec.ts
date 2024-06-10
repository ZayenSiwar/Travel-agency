import { TestBed } from '@angular/core/testing';

import { RvolService } from './rvol.service';

describe('RvolService', () => {
  let service: RvolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RvolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
