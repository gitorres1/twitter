import { Component, OnInit } from '@angular/core';
import { UserInformationService } from 'src/app/services/user-information.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_name: string;
  pass: string;

  constructor(private userInfo: UserInformationService, private authentication: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }


  logIn() {
    this.authentication.autenticar(this.user_name, this.pass).then(responseAut=>{
      if (responseAut.message == 'Autenticacion correcta') {
        let user = responseAut.user;
        this.userInfo.fillUserInfo(user.username, user.hobbie);
        this.router.navigateByUrl('/home')
      } else {
        alert(responseAut.message)
      }
    });

  }

}
