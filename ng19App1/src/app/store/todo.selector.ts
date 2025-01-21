import {  createSelector } from "@ngrx/store"
import { TodoState } from "./todo.reducer";
import { AppState } from "./state";
 

const feature = (state: AppState) => state.todo;

export const todoSelector = createSelector(
  feature,
  (state: TodoState) => state.todos
);