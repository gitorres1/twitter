import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../../model/Tweet';

@Component({
  selector: 'app-detalle-tweet',
  templateUrl: './detalle-tweet.component.html',
  styleUrls: ['./detalle-tweet.component.css']
})
export class DetalleTweetComponent implements OnInit {

  constructor() {
   }

  @Input() mySelectedTweet: Tweet;

  ngOnInit() {
  }


}
