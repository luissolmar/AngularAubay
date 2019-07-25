import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'aby-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {

  isEditable:boolean
  aTareas: Array<TareaModel>
  newTarea: TareaModel

  constructor(public storageService: StorageService) { 
    this.storageService.name="paco"
  }

  ngOnInit() {
    this.isEditable = false;
    this.aTareas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : []           
    this.newTarea = new TareaModel()

    this.aTareas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : []           
    
    this.aTareas =
    this.storageService.getArray('tareas') ?
    this.storageService.getArray('tareas') : []
    
  }

  addTarea() {
    this.aTareas.push(this.newTarea)    
    this.newTarea = new TareaModel()
    this.saveTareas();
  }

  deleteTarea(i: number){
    this.aTareas.splice(i,1)
    this.saveTareas();
  }

  deleteAllTareas(){
    this.aTareas = []
    this.storageService.removeArray('tareas')
    // localStorage.removeItem('tareas')
  }

  saveTareas(){
    // localStorage.setItem('tareas',JSON.stringify(this.aTareas));
    console.log(this.aTareas)
    this.storageService.setArray('tareas', this.aTareas)
  }

}
