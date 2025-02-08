import { Action, ActionReducer } from "@ngrx/store";
import { TodoEffects } from "./todo.effects";
import { todoReducer, TodoState } from "./todo.reducer";
import { cartReducer, cartState } from "./cart/cart.reducer";
import { CartEffects } from "./cart/cart.effects";
import { AuthReducer, authState } from "./auth/auth.reducer";
import { AuthEffects } from "./auth/auth.effects";
import { testReducer, TestState } from "./test/test.reducer";


export interface AppState {
  todo: TodoState,
  cart: cartState,
  auth: authState,
  test: TestState
}

export interface AppStore {
  todo: ActionReducer<TodoState, Action>;
  cart: ActionReducer<cartState, Action>;
  auth: ActionReducer<authState, Action>;
  test: ActionReducer<TestState, Action>;
}

export const appStore: AppStore = {
  todo: todoReducer,
  cart: cartReducer,
  auth: AuthReducer,
  test: testReducer
}

export const appEffects = [TodoEffects, CartEffects, AuthEffects];