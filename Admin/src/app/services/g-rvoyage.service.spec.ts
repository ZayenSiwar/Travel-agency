import { TestBed } from '@angular/core/testing';

import { GRvoyageService } from './g-rvoyage.service';

describe('GRvoyageService', () => {
  let service: GRvoyageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GRvoyageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
