import { UserRole } from '../userProfile/userRole';

export interface Credentials {
    account: string;
    passWord: string;
    token?: string;
}

export const exampleCredentials = (account: string = 'Admin'): Credentials => ({
    account,
    passWord: 'vista7',
    token: 'abcd12345='
});

export const emptyCredentials = (): Credentials => ({
    account: '',
    passWord: '',
    token: ''
});

