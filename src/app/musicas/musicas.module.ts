import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    PagesComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports: [
    PagesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MusicasModule { }
