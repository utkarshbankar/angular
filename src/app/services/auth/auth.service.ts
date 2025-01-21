import { Injectable } from '@angular/core';
import { User } from '../../store/auth/auth.model';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

   getAll(): Observable<User[]> {
        return of(
          [
            { userName:'PB', pwd:'pu@*****', email:'pu@bankar.com', isLoggedIn: false, isValid: false},
            { userName:'PB', pwd:'pu@*****', email:'pu@bankar.com', isLoggedIn: false, isValid: false},
            { userName:'PB', pwd:'pu@*****', email:'pu@bankar.com', isLoggedIn: false, isValid: false},
          ]
        ).pipe(delay(2000))
      }
}
