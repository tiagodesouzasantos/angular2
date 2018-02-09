import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
    url:string = 'http://loaine.com';
    urlImagem:string = 'http://lorempixel.com/400/200/sports/';
    valorAtualInput:string;
    valorSalvo:string;
    isMouseOver:boolean;
    nome:string = "ABC";
    pessoa:any = {
        nome:'Tiago',
        idade:28
    };
    getValor(){
        return 1;
    }
    botaoClicado(){
        alert('Apertou!!');
    }
    onKeyUp(event){
        this.valorAtualInput = event.target.value;
    }
    salvarValor(valor){
        this.valorSalvo = valor;
    }
    onMouseOverOut(){
        this.isMouseOver = !this.isMouseOver;
    }
  constructor() { }

  ngOnInit() {
  }

}
