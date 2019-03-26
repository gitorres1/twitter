import { Component, OnInit } from '@angular/core';
import { TweetsService } from 'src/app/services/tweets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: any;
  id: string;

  constructor(private tweetService: TweetsService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.usuario = tweetService.getUsuario(this.id).subscribe(resp => {
      this.usuario = resp;
    });

  }

  ngOnInit() {
  }

}
