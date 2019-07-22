import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
//import { HomeModule } from './home/home.module';
//import { TareasModule } from './tareas/tareas.module';
//import { UsuariosModule } from './usuarios/usuarios.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    NgbModule
    
    //HomeModule,
    //TareasModule,
    //UsuariosModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
