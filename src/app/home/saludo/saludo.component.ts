import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aby-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
nombre: string;
message: string;

  constructor() { }

  //Inicializar
  ngOnInit() {
    this.nombre = ''
    this.message = 'Dime tu nombre'
  }
  //Funciones
  onClickBorrar(ev: Event) {
    this.nombre = ''
    console.log(ev)
  }
}