import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
    public login = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.login),
            switchMap(({ credentials }) => this.authService.login(credentials).pipe(
                map(token => token ? AuthActions.loginSuccess({ credentials: { ...credentials, token } }) : AuthActions.loginFailed()),
                catchError(() => of(AuthActions.loginFailed()))),
            )));

    constructor(
        private actions$: Actions,
        private authService: AuthService,
    ) {
    }
}