import { TestBed } from '@angular/core/testing';

import { SdklibService } from './sdklib.service';
import { HttpClient } from '@angular/common/http';
import { SdklibMockService } from './sdklib-mock.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { sdkLib } from './sdklib.module';

describe('SdklibService', () => {
  let service: SdklibService;
  let http: HttpClient;
  let mockSrv: SdklibMockService;
  let httpMock: HttpTestingController


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[SdklibMockService,SdklibService]
    });
    service = TestBed.inject(SdklibService);
    mockSrv = TestBed.inject(SdklibMockService);
    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sdkActual service method', () => {
    service.getSdkData();
  });

  it('should sdkMOck service method', () => {
    mockSrv.getSdkData();
  });


  it('should sdkActual service method', () => {
    service.getSdkDataOne1();
  });

  it('should sdkMOck service method', () => {
    mockSrv.getSdkDataOne1();
  });

  it('should sdkActual service method', () => {
    service.getSdkDataMethodWithPArams('par1');
  });

  it('should sdkMOck service method', () => {
    mockSrv.getSdkDataMethodWithPArams('para1');
  });

  it('should sdkActual service method', () => {
    service.getSdkDataMethodWithMultiplePArams('para1','para2');
  });

  it('should sdkMOck service method', () => {
    mockSrv.getSdkDataMethodWithMultiplePArams('para1', 'para2');
  });




});
