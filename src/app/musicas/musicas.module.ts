import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicasRoutingModule } from './musicas-routing.module';
import { ArtistasComponent } from './artistas/artistas.component';
import { AlbumsComponent } from './albums/albums.component';
import { RecientesComponent } from './recientes/recientes.component';
import { EstacionesComponent } from './estaciones/estaciones.component';
import { CancionesComponent } from './canciones/canciones.component';


@NgModule({
  declarations: [
    ArtistasComponent,
    AlbumsComponent,
    RecientesComponent,
    EstacionesComponent,
    CancionesComponent
  ],
  imports: [
    CommonModule,
    MusicasRoutingModule
  ],
  exports: [
    ArtistasComponent,
    AlbumsComponent,
    CancionesComponent,
    EstacionesComponent,
    RecientesComponent
  ]
})
export class MusicasModule { }
