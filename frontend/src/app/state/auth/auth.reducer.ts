import { Action, createReducer, on } from '@ngrx/store';
import { emptyCredentials } from 'src/app/model/auth/credentials';
import * as AuthActions from './auth.actions';
import { AuthState, initialState } from './auth.state';

const authReducer = createReducer(
    initialState,
    on(AuthActions.login, (state => ({
        ...state,
        isChecking: true
    }))),

    on(AuthActions.loginSuccess, ((state, { credentials }) => ({
        ...state,
        isChecking: false,
        isloggedin: true,
        credentials,
    }))),

    on(AuthActions.loginFailed, (state => ({
        ...state,
        isChecking: false,
        isloggedin: false,
    }))),

    on(AuthActions.logout, (state => ({
        ...state,
        isChecking: true
    }))),

    on(AuthActions.loginSuccess, (state => ({
        ...state,
        isChecking: false,
        isloggedin: false,
        credentials: emptyCredentials(),
    }))),

    on(AuthActions.loginFailed, (state => ({
        ...state,
        isChecking: false,
    }))),
);

export function reducer(state: AuthState | undefined, action: Action) {
    return authReducer(state, action);
}
