import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { ListaComponent } from './components/lista/lista.component';

import { HttpClientModule } from '@angular/common/http';
import { DatosapiComponent } from './components/datosapi/datosapi.component'

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    ListaComponent,
    DatosapiComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
