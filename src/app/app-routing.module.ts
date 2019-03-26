import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './sesion/usuario/usuario.component';
import { ListaTweetComponent } from './sesion/lista-tweet/lista-tweet.component';

const routes: Routes = [
  { path: 'home', component: ListaTweetComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
