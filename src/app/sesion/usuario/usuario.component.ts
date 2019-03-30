import { Component, OnInit } from '@angular/core';
import { TweetsService } from 'src/app/services/tweets.service';
import { ActivatedRoute } from '@angular/router';
import { Tweet } from 'src/app/model/Tweet';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: any;
  id: string;
  tweets: Tweet[];

  constructor(private tweetService: TweetsService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.usuario = tweetService.getUsuario(this.id).subscribe(resp => {
      this.usuario = resp;
    });
    tweetService.getPublicacionUsuario(this.id).subscribe(resp => {
      this.tweets = resp;
    })
  }

  ngOnInit() {
  }

}
