import { Injectable } from '@angular/core';
import { UserManager, User, UserManagerSettings } from 'oidc-client';
import { Constants } from '../services/constants';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userManager: UserManager;
  private _user: User | null = null;;
  private _loginChangedSubject = new Subject<boolean>();

  public loginChanged = this._loginChangedSubject.asObservable();

  private get idpSettings() : UserManagerSettings {
    return {
      authority: Constants.idpAuthority,
      client_id: Constants.clientId,
      redirect_uri: `${Constants.clientRoot}/signin-redirect-callback`,
      scope: "openid profile companyApi",
      response_type: "code",
      post_logout_redirect_uri: `${Constants.clientRoot}/signout-redirect-callback`
    }
  }

  constructor() { 
    this._userManager = new UserManager(this.idpSettings);
  }

  public login = () => {
    return this._userManager.signinRedirect();
  }

  public isAuthenticated = (): Promise<boolean> => {
    return this._userManager.getUser()
      .then(user => {
        if (user !== null) {
          if (this._user !== user) {
            this._loginChangedSubject.next(this.checkUser(user));
          }
  
          this._user = user;
  
          return this.checkUser(user);
        } else {
          // User is not logged in
          this._loginChangedSubject.next(false);
          return false;
        }
      });
  }
  public finishLogin = (): Promise<User> => {
    return this._userManager.signinRedirectCallback()
    .then(user => {
      this._user = user;
      this._loginChangedSubject.next(this.checkUser(user));
      return user;
    })
  }
  public logout = () => {
    this._userManager.signoutRedirect();
  }
  
  public finishLogout = () => {
    this._user = null;
    return this._userManager.signoutRedirectCallback();
  }

  private checkUser = (user : User): boolean => {
    return !!user && !user.expired;
  }
}