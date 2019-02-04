import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';

const appRoutes: Routes = [
  { path: 'pokemons', component: PokemonsComponent },
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
