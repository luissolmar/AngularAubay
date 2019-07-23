import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
//import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'aby-saludo-local',
  templateUrl: './saludo-local.component.html',
  styleUrls: ['./saludo-local.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SaludoLocalComponent implements OnInit {
  @ViewChild('in_nombre',{static: true}) innombre : ElementRef
  constructor() {
   }

  ngOnInit() {
    console.log(this.innombre.nativeElement)
  }

}
