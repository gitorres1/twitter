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
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './sesion/usuario/usuario.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './sesion/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    TweetsComponent,
    DetalleTweetComponent,
    ListaTweetComponent,
    UsuarioComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
