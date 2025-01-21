import { inject, Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { getAllUser, userLoadingSuccessful } from "./auth.actions"
import { catchError, map, mergeMap, of } from "rxjs"
import { AuthService } from "../../services/auth/auth.service";
// import { AuthService } from "../../services/auth/auth.service"


@Injectable()
export class AuthEffects {

    action$ = inject(Actions);

    constructor( private authSrv: AuthService){}

    loadUser$ = createEffect( () => 
        this.action$.pipe(
            ofType(getAllUser),
            mergeMap(() => 
                this.authSrv.getAll().pipe(
                    map( (users) => 
                        {   console.log("auth effect",users);
                            return userLoadingSuccessful({users})}),
                    // catchError((err) => of(UserLoadFailed({err: err.message})))
                )
            )
        )
    )
}