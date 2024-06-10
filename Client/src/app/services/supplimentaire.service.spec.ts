import { TestBed } from '@angular/core/testing';

import { SupplimentaireService } from './supplimentaire.service';

describe('SupplimentaireService', () => {
  let service: SupplimentaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplimentaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
