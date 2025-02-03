import { TestBed } from '@angular/core/testing';

import { RxjsApiService } from './rxjs-api.service';

describe('RxjsApiService', () => {
  let service: RxjsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
