import { createAction, props } from "@ngrx/store";
import { Test } from "./test.model";

export const loadTests = createAction('[Load All tests]');

export const addTest = createAction('[Add Test]', props<{test: Test}>());

export const updateTest = createAction('[Updated test]', props<{test: Test }>());

export const deleteTest  = createAction('[Delete test]', props<{id:number}>());