import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  isAuthorized = false;
  isAdmin = false;
  userId: string;

  constructor() { }

  Authorize() {
    this.isAuthorized = true;
    this.isAdmin = true;
    this.userId = '1';
  }

  LogOut() {
    this.isAuthorized = false;
    this.isAdmin = false;
    this.userId = null;
  }
}
