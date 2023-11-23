import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  admin: boolean = false;

  constructor() {}

  onToggle() {
    this.admin = !this.admin;
  }
}
