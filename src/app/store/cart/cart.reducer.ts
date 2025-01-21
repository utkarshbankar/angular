import { Product } from "./cart.model";
import { createReducer, on } from "@ngrx/store";
import { addToCart, removeFromCart, cartList, cartListLoaded } from "./cart.actions";

export interface cartState{
    products: Product[]
}

export const initialCartState : cartState = {
    products :[
        { id: 1, category:'Electronics', desc:'For Iron purpose', name:'Iron', isAvailable: false},
        { id: 2, category:'Cloths', desc:'For Mens', name:'Jeans', isAvailable: false},
    ]
}

export const cartReducer = createReducer( 
    initialCartState,
    on(cartList, (state) => ({...state})),
    on( addToCart, (state, {item}) => (
        {
            ...state, 
            products:  [...state.products, item]
        }
    )),
    on( removeFromCart, (state, {pid}) => (
        {
            ...state,
            products: state.products.filter( elm => elm.id !== pid) 
        }
    )),
    on( cartListLoaded, (state, {products}) =>(
        {
        ...state, products
        }
    ))
)