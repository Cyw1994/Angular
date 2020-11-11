import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

const AuthFeatureName = 'FeatureAuth';

const selectAuthFeatureSate = createFeatureSelector<AuthState>(AuthFeatureName);

export const selectIsLoggedIn = createSelector(
    selectAuthFeatureSate,
    state => state.isloggedin
);

export const selectIsChecking = createSelector(
    selectAuthFeatureSate,
    state => state.isChecking
);

export const selectCredentials = createSelector(
    selectAuthFeatureSate,
    state => state.credentials
);
