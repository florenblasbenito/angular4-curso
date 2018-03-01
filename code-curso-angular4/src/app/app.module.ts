import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { OrdenadorComponent } from './ordenador/teclado.component';
import { CarComponent } from './car/car.component';
import { InstrumentComponent } from './instrument/instrument.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    OrdenadorComponent,
    CarComponent,
    InstrumentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
