import { TestBed } from '@angular/core/testing';

import { ConnecteeService } from './connectee.service';

describe('ConnecteeService', () => {
  let service: ConnecteeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnecteeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
