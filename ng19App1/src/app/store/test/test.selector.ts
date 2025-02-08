import { createSelector } from "@ngrx/store";
import { AppState } from "../state";
import { TestState } from "./test.reducer";

const featureState = (state: AppState) => state.test;

export const testSelector = createSelector(
    featureState,
    (state ) => state.tests
);

export const testForPositiveIdSelector = createSelector(
    featureState,
    (state: TestState) => state.tests.filter( elm => elm.id > 0)
);






