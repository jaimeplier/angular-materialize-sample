import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
