import { createAction, props } from '@ngrx/store';
import { Credentials } from '../../model/auth/credentials';

const AUTH_PREFIX = '[Auth Actions] ';

export const login = createAction(
    AUTH_PREFIX + 'login',
    props<{ credentials: Credentials }>()
);

export const loginSuccess = createAction(
    AUTH_PREFIX + 'login success',
    props<{ credentials: Credentials }>()
);

export const loginFailed = createAction(
    AUTH_PREFIX + 'login failed',
);

export const logout = createAction(
    AUTH_PREFIX + 'logout',
    props<{ token: string }>()
);

export const changePwdWithOldOne = createAction(
    AUTH_PREFIX + 'change passWord with old one',
    props<{ account: string, oldPwd: string }>()
);

export const changePwdWithoutEmail = createAction(
    AUTH_PREFIX + 'change passWord without email',
    props<{ account: string, email: string }>()
);

export const changePwdWithoutMobile = createAction(
    AUTH_PREFIX + 'change passWord without email',
    props<{ account: string, phoneNum: string }>()
);

export const changePwdSuccess = createAction(
    AUTH_PREFIX + 'change passWord success',
    props<{ newPwd: string }>()
);

export const changePwdFailed = createAction(
    AUTH_PREFIX + 'change passWord failed'
);
