import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './sesion/usuario/usuario.component';
import { ListaTweetComponent } from './sesion/lista-tweet/lista-tweet.component';
import { RegistroComponent } from './sesion/registro/registro.component';
import { TweetsComponent } from './tweets/tweets.component';
import { LoginComponent } from './sesion/login/login.component';

const routes: Routes = [
  { path: 'home', component: ListaTweetComponent },
  { path: 'usuario/:id', component: UsuarioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'insertar', component: TweetsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
