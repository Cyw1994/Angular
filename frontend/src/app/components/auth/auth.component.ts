import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from 'src/app/model/auth/credentials';
import { AuthFacade } from '../../state/auth/auth.facade';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public credentials: Observable<Credentials>;
  public isLoggedIn: Observable<boolean>;
  public isChecking: Observable<boolean>;

  constructor(private authFacade: AuthFacade) {
    this.credentials = this.authFacade.credentials$;
    this.isLoggedIn = this.authFacade.isLoggedIn$;
    this.isChecking = this.authFacade.isChecking$;
  }

  public ngOnInit(): void {
  }
}
