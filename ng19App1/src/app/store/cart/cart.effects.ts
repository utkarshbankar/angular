import { inject, Injectable } from "@angular/core";
import { CartService } from "../../services/cart/cart.service";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { cartList, cartListLoaded } from "./cart.actions";
import { catchError, map, mergeMap, of } from "rxjs";


@Injectable()
export class CartEffects{

    action$ = inject(Actions);
    
    constructor(private cartService:CartService){}

     loadCart$ = createEffect(() => 
        this.action$.pipe( 
            ofType(cartList),
            mergeMap( () => 
                this.cartService.getAll().pipe(
                    map((products) => cartListLoaded({products})),
                    // catchError((error) =>
                    //             of(loadTodosFailure({ error: error.message }))
                    //           )
                )
            )
        )
     );

}
 