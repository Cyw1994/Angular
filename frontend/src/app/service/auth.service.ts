import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Credentials } from '../model/auth/credentials';

@Injectable()
export class AuthService {
    public login(credentials: Credentials): Observable<string> {
        return of(`${credentials.account}${Date.parse(new Date().toDateString())}`);
    }

    public logout(token: string): Observable<boolean> {
        return of(true);
    }
}
