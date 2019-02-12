import { Component, OnInit } from '@angular/core';

import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-berries',
  templateUrl: './berries.component.html',
  styleUrls: ['./berries.component.css']
})
export class BerriesComponent implements OnInit {

  berries: any;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
  }

}
