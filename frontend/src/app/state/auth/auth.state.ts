import { Credentials, emptyCredentials } from '../../model/auth/credentials';

export interface AuthState {
  credentials: Credentials;
  isloggedin: boolean;
  isChecking: boolean;
}

export const initialState: AuthState = {
  credentials: emptyCredentials(),
  isloggedin: false,
  isChecking: false
};
