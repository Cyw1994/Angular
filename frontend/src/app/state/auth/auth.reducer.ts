import { Action, createReducer, on } from '@ngrx/store';
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
    })))
);

export function reducer(state: AuthState | undefined, action: Action) {
    return authReducer(state, action);
}
