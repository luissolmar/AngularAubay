import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aby-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title : string;
  logo:  string;
//title = 'Bienvenidos al curso de Angular Aubay';
//logo  = '../assets/Logo.svg';
//logo  = '../../assets/Logo.svg';
  constructor() { }

  ngOnInit() {
    this.title= 'Bienvenidos al curso de Angular Aubay';
    this.logo  = '../../assets/Logo.svg';
  }

}
