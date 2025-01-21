import { createReducer, on } from "@ngrx/store";
import { User } from "./auth.model";
import { getAllUser, UserLoadFailed, userLoadingSuccessful, validUsers } from './auth.actions';

export interface authState {
    users: User[]
}

export const initialUserState : authState = {
       users: [
        { userName:'SB', pwd:'su@*****', email:'su@bankar.com', isLoggedIn: false, isValid: false},
       ]
}

export const AuthReducer = createReducer(
    initialUserState,
    on( getAllUser, (state) => ({...state})),
    on( UserLoadFailed, (state, {err}) => (
        { ...state, err }
    )),
    on( validUsers, (state, {valid}) => (
        {
            ...state,
            users: state.users.filter( elm => elm.isValid == valid )
        }
    )),
    on( userLoadingSuccessful, (state, {users}) => ( 
        {...state, users } 
    ))
)