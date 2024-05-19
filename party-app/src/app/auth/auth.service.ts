import { Injectable } from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oidcSecurityService:OidcSecurityService ) { }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    return this.oidcSecurityService.logoff();
  }

  checkAuth() {
    return this.oidcSecurityService.checkAuth();
  }
}
