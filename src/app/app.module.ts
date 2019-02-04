import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';

import { AppRoutingModule } from './app.routing.module';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonsComponent,
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    HttpClientModule,
    PokemonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
