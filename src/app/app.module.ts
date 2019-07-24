import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import localEs from '@angular/common/locales/es';
import {registerLocaleData } from '@angular/common';

registerLocaleData(localEs)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    NgbModule,
    SharedModule
  ],
  //providers: [],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
