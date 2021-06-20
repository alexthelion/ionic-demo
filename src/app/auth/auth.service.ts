import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userIsAuthenticated = false;

  constructor() { }

  get isUserAuthenticated(): boolean {
    return this.userIsAuthenticated;
  }

  login(): void {
    this.userIsAuthenticated = true;
  }

  logout(): void {
    this.userIsAuthenticated = false;
  }
}
