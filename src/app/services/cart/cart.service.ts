import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Product } from '../../store/cart/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

    // mock backend
    getAll(): Observable<Product[]> {
      return of(
        [
          { id: 1, category:'Electronics', desc:'For Iron purpose', name:'Iron', isAvailable: false},
          { id: 2, category:'Cloths', desc:'For Mens', name:'Jeans', isAvailable: false},
          { id: 3, category:'Shoes', desc:'For Mens/ Women', name:'Snicker', isAvailable: true},
          { id: 3, category:'cloths', desc:'For Women', name:'Tops', isAvailable: true},

        ]
      ).pipe(delay(2000))
    }
  
}
