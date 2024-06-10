import { TestBed } from '@angular/core/testing';

import { OmraService } from './omra.service';

describe('OmraService', () => {
  let service: OmraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
