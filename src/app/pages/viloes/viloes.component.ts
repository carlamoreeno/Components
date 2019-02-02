import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viloes',
  templateUrl: './viloes.component.html',
  styleUrls: ['./viloes.component.css']
})

export class ViloesComponent implements OnInit {


  viloes: any[] = [];


  tipoPesquisa: string = "nome";
  placeholderValue: string = "Ex: Apocalypse";
  nomeInput: string = "";

  constructor() {}

  ngOnInit() {}

  onSubmit() {
  	console.log(this.nomeInput, this.tipoPesquisa)
  }

  updatePlaceholder(value){
    if ( value == "nome" )
      this.placeholderValue = "Ex: Apocalypse";
    else
      this.placeholderValue = "Ex: 35";
  }

}
