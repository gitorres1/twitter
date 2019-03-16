import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() {

    this.usr = {
      nombre: 'Zulay',
      apellido: 'Bonilla',
      correo: 'zbonilla@correo.com',
      celular: 32158235,
      fecha: new Date(1989, 9, 5)
    }
  }

  usr: Usuario;

  ngOnInit() {
  }

}
