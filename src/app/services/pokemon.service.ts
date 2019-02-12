import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';



@Injectable()
export class PokemonService {

	pokeApiUrl: string = "https://pokeapi.co/api/v2/"

	constructor( public http: HttpClient ) { }

	getPokemon(nomeOuId: string | number): Observable<any> {
		return this.http.get( this.pokeApiUrl + 'pokemon/' + nomeOuId ).pipe( map(res => res) );
	}

	getPokemonsInRange(startId: number, endId: number): Observable<any> {
		return this.http.get( this.pokeApiUrl + "pokemon?offset=" + startId + "&limit=" + (endId-startId) ).pipe( map(res => res) );
	}

	getBerries(page: number): Observable<any> {
		let start = (page - 1) * 20;
		return this.http.get(this.pokeApiUrl + 'berry?offset=' + start + '&limit=20').pipe(map(res => res));
	}

}
