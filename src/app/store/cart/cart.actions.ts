import { createAction, props } from "@ngrx/store";
import { Product } from "./cart.model";

export const cartList = createAction( '[cart] all items');

export const cartListLoaded = createAction('[cart] data load success', props<{ products: Product[]}>());

export const cartListLoadFailed = createAction('[cart] data load Failed', props<{ error: string}>());

export const addToCart = createAction('[Cart] Add item', props<{item: Product}>());

export const removeFromCart = createAction('[Cart] remove item', props<{pid: number}>());

// export const updateCart = createAction('[Cart] update cart', props<{id:string}>());

// export const loadTodosSuccess = createAction('[Todo] Load Todos Success', props<{ todos: Todo[] }>());
// export const loadTodosFailure = createAction('[Todo] Load Todos Failure', props<{ error: string }>());
