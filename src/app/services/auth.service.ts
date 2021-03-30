import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public setAuthUserData(user: string): void {
    sessionStorage.setItem('auth_user', user);
  }
  public getAuthUserData(): any {
    return sessionStorage.getItem('auth_user');
  }
  public deleteAuthUserData(): void {
    sessionStorage.removeItem('auth_user');
  }
}
