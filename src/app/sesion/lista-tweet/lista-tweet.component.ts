import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../model/Tweet';
import { TweetsService } from '../../services/tweets.service';

@Component({
  selector: 'app-lista-tweet',
  templateUrl: './lista-tweet.component.html',
  styleUrls: ['./lista-tweet.component.css']
})
export class ListaTweetComponent implements OnInit {

  miTweet: Tweet;
  misTweets: Array<Tweet>;
  autorT: string;
  textoT: string;

  constructor(private tweetService: TweetsService) {

    this.miTweet = new Tweet();
    tweetService.getAllTweets().subscribe(resp => {
      this.misTweets = resp;
    });
  }

  ngOnInit() {
  }

 
}
