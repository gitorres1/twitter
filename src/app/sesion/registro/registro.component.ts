import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { TweetsService } from 'src/app/services/tweets.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usr: Usuario;
  nombreUsuario: string;
  apellidoUsuario: string;
  correoUsuario: string;
  celularUsuario: string;
  claveUsuario: string;

  constructor(private tweetService: TweetsService) {
  }

  ngOnInit() {
  }

  addUsuario() {
    this.usr = {
      nombreUsuario: this.nombreUsuario,
      apellidoUsuario: this.apellidoUsuario,
      correoUsuario: this.correoUsuario,
      celularUsuario: this.celularUsuario,
      claveUsuario: this.claveUsuario
    };

    console.log('Agregar Usuario' + this.usr.nombreUsuario);
    this.tweetService.addUsuario(this.usr);
  }
}
