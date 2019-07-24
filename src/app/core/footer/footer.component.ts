import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aby-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  autor: string;
  empresa: string;
  fecha: Date;

  constructor() { }

  ngOnInit() {
    this.autor = `Emilio De la Iglesia`
    this.empresa = `Aubay`
    this.fecha = new Date();
  }

}
