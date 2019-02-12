import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { BerriesComponent } from './pages/berries/berries.component';


const appRoutes: Routes = [
  { path: 'pokemons', component: PokemonsComponent },
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: 'trainer', component: TrainerComponent },
  { path: 'berries', component: BerriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
