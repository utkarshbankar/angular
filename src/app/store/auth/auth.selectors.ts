import { createSelector } from "@ngrx/store";
import { AppState } from "../state";
import { authState } from "./auth.reducer";

const userFeatureState = (state: AppState) => state.auth ; 

export const selectAllUser = createSelector(
    userFeatureState,
    (state: authState) => state.users
);

export const selectValidUser = createSelector(
    userFeatureState,
    (state: authState) => state.users.filter( user => user.isValid)
);

export const selectNamedUser = createSelector(
    userFeatureState,
    (state: authState) => state.users.filter( user => user.userName)
);

export const selectLoggedInUser = createSelector(
    userFeatureState,
    (state: authState) => state.users.filter( user => user.isLoggedIn)
);


