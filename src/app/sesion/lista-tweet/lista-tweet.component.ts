import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../model/Tweet';
import { TweetsService } from '../../services/tweets.service';
import { UserInformationService } from 'src/app/services/user-information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-tweet',
  templateUrl: './lista-tweet.component.html',
  styleUrls: ['./lista-tweet.component.css']
})
export class ListaTweetComponent implements OnInit {


  misTweets: Array<Tweet>;
  autorT: string;
  textoT: string;

  constructor(private tweetService: TweetsService, private userInfo: UserInformationService, private router: Router) {
    if(this.userInfo.getUserName() == ""){
      this.router.navigateByUrl('/login')
    }


    tweetService.getAllTweets().subscribe(resp => {
      this.misTweets = resp;
    });
  }

  ngOnInit() {
  }


}
