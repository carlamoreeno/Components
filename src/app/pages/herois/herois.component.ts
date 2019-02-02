import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit {


  herois: any[] = [];


  tipoPesquisa: string = "nome";
  placeholderValue: string = "Ex: Ben 10";
  nomeInput: string = "";

  constructor() {}

  ngOnInit() {}

  onSubmit() {
  	console.log(this.nomeInput, this.tipoPesquisa)
  }

  updatePlaceholder(value){
    if ( value == "nome" )
      this.placeholderValue = "Ex: Ben 10";
    else
      this.placeholderValue = "Ex: 78";
  }

}
