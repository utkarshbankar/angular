import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // mock backend
  getAll(): Observable<any[]> {
    return of(
      [{
        id: '1',
        type:'tech',
        desc: 'description 1',
        status: false
      },
      {
        id: '2',
        type:'tech two',
        desc: 'description 2',
        status: false
      }]
    ).pipe(delay(2000))
  }

}
