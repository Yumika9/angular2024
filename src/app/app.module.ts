import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './alumno/alumno/alumno.component';
import { ContadorComponent } from './contador/contador/contador.component';
import { ListaComponent } from './lista/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    ContadorComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
