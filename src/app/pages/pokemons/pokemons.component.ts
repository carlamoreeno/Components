import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {


  // Array no qual iremos armazenar nossos pokemons
  pokemons: any[] = [];

  // Array no qual veremos se o card pode fazer a request
  pokemonCardHasUpdated: boolean[] = [];

  // Se a pesquisa é por nome ou por id (inicializamos com o valor "nome" por padrão)
  tipoPesquisa: string = "nome ou pelo ID";

  // Valor q vamos colocar como placeholder na barra de pesquisa
  placeholderValue: string = "Ex: Bulbasaur";

  // O valor que está na barra de pesquisa
  nomeInput: string = "";

  // Menor ID de Pokemón que queremos
  rangeMinValue: number = 0;
  // Maior ID de Pokemón que queremos
  rangeMaxValue: number = 20;


  constructor() {}


  ngOnInit() {
      // Coloca um listener que irá disparar a função this.scroll toda vez que "scrollarmos" a página
      window.addEventListener('scroll', this.scroll, true);
  }


  ngOnDestroy() {
      // Remove o listener quando mudarmos de página
      window.removeEventListener('scroll', this.scroll, true);
  }


  // Função que será disparada pelo listener
  scroll = (): void => {
    this.updateCards();
  };


  // Função chamada ao clicar no botão de pesquisar

  onSubmit() {

    // Sabendo o valor do input e o tipo de pesquisa, só precisamos mandar uma requisição pra API.

    // Se o tipo da pesquisa for por nome ou ID:

    if ( this.tipoPesquisa == "nome ou pelo ID" ) {

      console.log( this.nomeInput );

      // --------------------------------------------------------------------------------//
      //                      FAZER REQUISIÇÃO DE NOME/ID PRA API                        //
      // --------------------------------------------------------------------------------//

    }
    // Se não for, então nosso tipo de pesquisa é por range
    else {

      console.log( this.rangeMinValue, this.rangeMaxValue );

      // --------------------------------------------------------------------------------//
      //                       FAZER REQUISIÇÃO DE RANGE PRA API                         //
      // --------------------------------------------------------------------------------//

    }

  }


  // Função chamada ao clicarmos em um radio button para atualizarmos o placeholder
  updatePlaceholder(value){

    if ( value == "nomeOuID" )
      this.placeholderValue = (Math.random() >= 0.5) ? "Ex: Bulbasaur" : "Ex: 1";
    else 
      this.nomeInput = "";

  }

  // Alinha os ranges
  adjustMaxSliderValues(){
    if (this.rangeMinValue > this.rangeMaxValue)
      this.rangeMaxValue = this.rangeMinValue;
  }

  // Alinha os ranges
  adjustMinSliderValues(){
    if (this.rangeMaxValue < this.rangeMinValue)
      this.rangeMinValue = this.rangeMaxValue;
  }


  // Função pra atualizar os cards quando eles aparecerem na tela ao navegarmos por ela
  updateCards(){

    // Vemos o tamanho da nossa viewport
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    // Fazemos um laço que será repetido 
    for (let i=0; i<this.pokemons[0].results.length; i++) {

      // Pega o elemento da página que possui o ID "card-i" (um dos nossos cards)
      var el = document.getElementById( "card-"+i );

      // Se este elemento existir...
      if (el) {

        // Pegamos a posição do topo do card
        let rect = el.getBoundingClientRect();
        let y = rect.top;

        // Se esse card não foi atualizado ainda e se ele está na tela
        if ( !this.pokemonCardHasUpdated[i] && y <= h ) {

          // Fazemos a requisição na API

          // --------------------------------------------------------------------------------//
          //                      FAZER REQUISIÇÃO DE NOME/ID PRA API                        //
          // --------------------------------------------------------------------------------//

          // E falamos que este card foi atualizado
          console.log("Card "+ i + " atualizado!");
          this.pokemonCardHasUpdated[i] = true;

        }

      }

    }
    
  }


}