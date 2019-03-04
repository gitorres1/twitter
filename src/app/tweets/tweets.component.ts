import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  constructor() {

    this.user = {
      nombre: 'Zulay',
      apellido: 'Bonilla',
      correo: 'zbonilla@correo.com',
      celular: 32158235,
      fecha: new Date(1989, 9, 5)
    };

  }

  user: Usuario;

  ngOnInit() {
  }
}


