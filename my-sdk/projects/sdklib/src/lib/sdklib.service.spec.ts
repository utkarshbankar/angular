import { TestBed } from '@angular/core/testing';

import { SdklibService } from './sdklib.service';

describe('SdklibService', () => {
  let service: SdklibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdklibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
