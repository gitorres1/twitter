import { Component, OnInit } from '@angular/core';
import { Tweet } from '../model/Tweet';
import { TweetsService } from '../services/tweets.service';
import { UserInformationService } from '../services/user-information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  miTweet: Tweet;
  autorT: string;
  textoT: string;

  constructor(private tweetService: TweetsService, private userInfo: UserInformationService, private router: Router) {

    if(this.userInfo.getUserName() == ""){
      this.router.navigateByUrl('/login')
    }
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


