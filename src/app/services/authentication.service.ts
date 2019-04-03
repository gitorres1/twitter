import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public autenticar(username: string, password: string) {

    if (username == 'homer' && password == 'donuts') {
      return {
        message: 'Autenticacion correcta',
        user: {
          username: 'Damian',
          hobbie: ':)'
        }
      };
    } else {
      return {
        message: 'Autenticacion fallida',
        user: {
          username: '',
          hobbie: ''
        }
      };
    }
  }

}
