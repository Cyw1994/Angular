import { UserRole } from './userRole';

export interface UserProfile {
    account: string;
    nickName: string;
    sex: number;
    age: number;
    email: string;
    phoneNum?: string;
    role: UserRole;
    lastLogin: string;
}

export const emptyUserProfile = (account: string = 'admin'): UserProfile => ({
    account,
    nickName: '',
    sex: null,
    age: null,
    email: '',
    role: null,
    lastLogin: ''
});

