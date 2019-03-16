import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../model/Tweet';

@Component({
  selector: 'app-lista-tweet',
  templateUrl: './lista-tweet.component.html',
  styleUrls: ['./lista-tweet.component.css']
})
export class ListaTweetComponent implements OnInit {

  constructor() {

    this.miTweet = new Tweet();

    const tweet1 = {
      id: 1,
      texto: 'You know something is unusual when your code runs perfect at first time',
      autor: 'JustADevGuy'
    };
    const tweet2 = {
      id: 1,
      texto: 'You know something is unusual when your code runs perfect at first time',
      autor: 'JustADevGuy'
    };
    const tweet3 = {
      id: 1,
      texto: '1969: What are you doing with that 2KB of RAM? -sending people to the moon',
      autor: 'AnotherDevGuy'
    };
    const tweet4 = {
      id: 1,
      texto: '2019: What are you doing with that 1.5GB of RAM? -Just checking facebook',
      autor: 'AnotherDevGuy'
    };
    this.misTweets = new Array();
    this.misTweets.push(tweet1);
    this.misTweets.push(tweet2);
    this.misTweets.push(tweet3);
    this.misTweets.push(tweet4);
  }

  miTweet: Tweet;
  misTweets: Array<Tweet>;
  autorT: string;
  idT: number;
  textoT: string;

  ngOnInit() {
  }

  addnewTweet() {
    const tweetAux = new Tweet();
    tweetAux.autor = this.autorT,
    tweetAux.id = this.idT;
    tweetAux.texto = this.textoT;
    this.misTweets.push(tweetAux);
  }
}
