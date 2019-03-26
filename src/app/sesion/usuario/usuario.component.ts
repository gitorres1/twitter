import { Component, OnInit } from '@angular/core';
import { TweetsService } from 'src/app/services/tweets.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: any;

  constructor(private tweetService: TweetsService) {

    this.usuario = tweetService.getUsuario(this.usuario).subscribe(resp => {
      this.usuario = resp;
    });

  }

  ngOnInit() {
  }

}
