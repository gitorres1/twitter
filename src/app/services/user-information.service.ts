import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
  private username: string;
  private hobbie: string;

  constructor() { }

  fillUserInfo(username: string, hobbie: string) {
    this.username = username;
    this.hobbie = hobbie;
  }

  logOut() {
    this.username = '';
    this.hobbie = '';
  }

  getUserName() {
    return this.username;
  }
  getHobbie() {
    return this.hobbie;
  }
}
