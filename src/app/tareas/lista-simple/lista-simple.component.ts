import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.models';

@Component({
  selector: 'aby-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {
  
  aTareas: Array<TareaModel>
  newTarea: TareaModel
  isEditable: boolean

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('tareas'))
    {
      
    }
    //this.aTareas = <Array<TareaModel>>(localStorage.getItem('tareas') ? localStorage.getItem('tareas') :[])
    //this.aTareas = []
    //this.aTareas = (localStorage.getItem('tareas') ? localStorage.getItem('tareas') :[]) as Array<TareaModel>;    
    this.aTareas = (localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) :[]) as Array<TareaModel>;    
    this.newTarea = new TareaModel()
  }

  addTarea() {
    this.aTareas.push(this.newTarea)
    this.newTarea = new TareaModel()
    localStorage.setItem('tareas',JSON.stringify(this.aTareas))
    console.log(this.aTareas)
  }
  deleteTarea(i:number){
    this.aTareas.splice(i, 1)
    this.saveTarea()
    //localStorage.setItem('tareas',JSON.stringify(this.aTareas))
  }
  deleteAllTarea(){
    this.aTareas =[]
    //localStorage.setItem('tareas',JSON.stringify(this.aTareas))
    //localStorage.clear()
    localStorage.removeItem('tareas')
  }
  saveTarea() {
    console.log(this.aTareas)
    localStorage.setItem('tareas',JSON.stringify(this.aTareas))   
  }
  
  
}
