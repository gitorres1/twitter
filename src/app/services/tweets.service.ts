import { Injectable } from '@angular/core';
import { Tweet } from '../model/Tweet';
import { ALL_TWEETS } from '../datos/datos';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor() { }

  public getAllTweets(): Observable<Tweet[]> {
    return of(ALL_TWEETS);
  }
}

