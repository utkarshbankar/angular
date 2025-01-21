import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state';
import { cartList, cartListLoaded } from '../../store/cart/cart.actions';
import { Observable } from 'rxjs';
import { Product } from '../../store/cart/cart.model';
import { selectCart } from '../../store/cart/cart.selector';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [ AsyncPipe, JsonPipe, NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  cart$: Observable<Product[]> ; 
  cartItems: Product[] = [];
   
  constructor(private store: Store<AppState>){
    this.cart$ = this.store.select(selectCart);

    this.loadTodos();
  }

  ngOnInit(): void {
    this.cart$.subscribe((data) => {
      console.log('Cart data:', data);
      this.cartItems = data; // Store data locally if needed
    });
  
  }

   loadTodos() {
      this.store.dispatch(cartList());
    }
}
