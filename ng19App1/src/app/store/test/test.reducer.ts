import { createReducer, on, State } from "@ngrx/store"
import { Test } from "./test.model"
import { addTest, deleteTest, loadTests, updateTest } from "./test.action"

export interface TestState {
    tests : Test[]
}

export const initTestState : TestState = {
    tests : []
}

export const testReducer = createReducer( 
    initTestState,
    on(loadTests, (state) => ({...state})),
    on(addTest, (state, {test}) => ({...state, tests: [...state.tests, test]})),
    on( updateTest, (state, {test}) => (
        {...state, 
            tests: state.tests.map( (elm: Test) => elm.id == test.id ? test : elm)
        })),
    on(deleteTest, (state, {id}) => (
        { ...state, 
            tests: state.tests.filter( (elm: Test) => elm.id == id)}
        )) 
);