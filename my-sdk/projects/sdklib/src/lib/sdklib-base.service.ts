
import { Observable } from 'rxjs';

/**
 * This is the abstract class for both services
 */
export abstract class SdkLibBaseService {

/**
 *  Type -1 
 */

abstract getSdkData(): Observable<any>;

/**
 * 
 */

abstract getSdkDataOne1(): Observable<any>;

abstract getSdkDataMethodWithPArams(param1: any): Observable<any>;

abstract getSdkDataMethodWithMultiplePArams(param1: any, param2:any): Observable<any>;

}
