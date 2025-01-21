import { createAction, props } from "@ngrx/store";
import { User } from "./auth.model";

export const getAllUser = createAction('[Auth] All users');

export const userLoadingSuccessful = createAction('[Auth] All users loaded successfully', props<{users: User[]}>());

export const UserLoadFailed = createAction('[Auth] All users load failed', props<{err: string}>());

export const validUsers = createAction('[Auth] valid user', props<{ valid: boolean}>());