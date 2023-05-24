import { TestBed } from '@angular/core/testing';

import { CurdapiService } from './curdapi.service';

describe('CurdapiService', () => {
  let service: CurdapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurdapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
