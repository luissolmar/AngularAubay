import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aby-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  nombre: string;
  message: string;
  frase : string;

  constructor() { }

  ngOnInit() {
    this.nombre = ''
    this.message= 'Dime tu nombre'
    this.frase = 'Ejemplo de frase larga para probar un pipe, ¿entendiste?'
  }

  onClickBorrar(ev: Event){
    this.nombre = ''
    console.log(ev);
  }

}
