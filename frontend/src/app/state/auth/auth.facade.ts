import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../state/auth/auth.state';
import * as AuthSelectors from './auth.selectors';
import * as AuthActions from './auth.actions';
import { Credentials } from '../../model/auth/credentials';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
    constructor(private store: Store<AuthState>) {}

    public isChecking$ = this.store.select(AuthSelectors.selectIsChecking);
    public isLoggedIn$ = this.store.select(AuthSelectors.selectIsLoggedIn);
    public credentials$ = this.store.select(AuthSelectors.selectCredentials);

    public login(credentials: Credentials) {
        this.store.dispatch(AuthActions.login({ credentials }));
    }

    public logout(token: string) {
        this.store.dispatch(AuthActions.logout({ token }));
    }
}