import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../../model/Tweet';

@Component({
  selector: 'app-detalle-tweet',
  templateUrl: './detalle-tweet.component.html',
  styleUrls: ['./detalle-tweet.component.css']
})
export class DetalleTweetComponent implements OnInit {

  constructor() {

    this.mySelectedTweet = {
      id: 2,
      autor: 'Damian',
      texto: 'Mi primer tweet'
    };
   }

  @Input() mySelectedTweet: Tweet;

  ngOnInit() {
  }


}
