import { createSelector } from "@ngrx/store";
import { cartState } from "./cart.reducer";
import { AppState } from "../state";

const cartFeatureState = (state: AppState) => state.cart;

export const selectCart = createSelector(
    cartFeatureState,
    (state: cartState) => state.products
);

export const selectCartLength = createSelector(
    cartFeatureState,
    (state: cartState) => state.products.length
);

export const selectAvailableCartItem = createSelector(
    cartFeatureState,
    (state: cartState) => state.products.filter((elm) => elm.isAvailable)
);

export const selectCategoryCartItem = createSelector(
    cartFeatureState,
    (state: cartState) => state.products.filter((elm) => elm.category)
);

export const selectNotCategoryCartItem = createSelector(
    cartFeatureState,
    (state: cartState) => state.products.filter((elm) => !elm.category)
);

