import { Injectable } from '@angular/core';
import { Tweet } from '../model/Tweet';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor(private http: HttpClient) { }

  public getAllTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(environment.urlConsultaTweets);
  }

  public insertTweet(tweet: Tweet) {
    console.log('El tweet a insertar', tweet);

    const body = new HttpParams().set('usuario', tweet.usuario + ''
    ).set('contenidoPublicacion', tweet.contenidoPublicacion);

    return this.http.post(environment.urlInsertaTweets, body).subscribe();
  }

  public getUsuario(usuario: Usuario): Observable<Usuario> {

    const body = new HttpParams().set('id', usuario.idUsuario);
    return this.http.get<Usuario>(environment.urlConsultaUsuario, {params: body});
  }
}

