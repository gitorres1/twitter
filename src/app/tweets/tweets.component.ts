import { Component, OnInit } from '@angular/core';
import { Tweet } from '../model/Tweet';
import { TweetsService } from '../services/tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  miTweet: Tweet;
  autorT: string;
  textoT: string;

  constructor(private tweetService: TweetsService) {

    this.miTweet = new Tweet();

  }

  ngOnInit() {
  }

  public addnewTweet() {
    console.log('Agregar Tweet');
    this.miTweet.contenidoPublicacion = this.textoT;
    this.miTweet.usuario = this.autorT;
    this.tweetService.insertTweet(this.miTweet);
  }
}


