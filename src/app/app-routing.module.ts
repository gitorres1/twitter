import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './sesion/usuario/usuario.component';
import { ListaTweetComponent } from './sesion/lista-tweet/lista-tweet.component';
import { RegistroComponent } from './sesion/registro/registro.component';
import { TweetsComponent } from './tweets/tweets.component';

const routes: Routes = [
  { path: 'home', component: ListaTweetComponent },
  { path: 'usuario/:id', component: UsuarioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'insertar', component: TweetsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
