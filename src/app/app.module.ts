import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './sesion/registro/registro.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TweetsComponent } from './tweets/tweets.component';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { DetalleTweetComponent } from './sesion/detalle-tweet/detalle-tweet.component';
import { ListaTweetComponent } from './sesion/lista-tweet/lista-tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    TweetsComponent,
    DetalleTweetComponent,
    ListaTweetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
