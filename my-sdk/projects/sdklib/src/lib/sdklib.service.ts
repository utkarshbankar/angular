import { Injectable } from '@angular/core';
import { SdkLibBaseService } from './sdklib-base.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SdklibService  extends SdkLibBaseService{

  constructor(private http:HttpClient) { 
    super();
  }

  getSdkData(): Observable<any> {
    // here return the actual api calls using http
    return of([]);  
  }

  getSdkDataOne1(): Observable<any> {
    return of([]);  
  }

  getSdkDataMethodWithPArams(param1: any): Observable<any> {
    return of([]);
  }

  getSdkDataMethodWithMultiplePArams(param1: any, param2: any): Observable<any> {
    return of([]);
  }

  
}
