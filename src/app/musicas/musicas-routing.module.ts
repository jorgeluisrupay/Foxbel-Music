import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { EstacionesComponent } from './estaciones/estaciones.component';
import { RecientesComponent } from './recientes/recientes.component';
import { CancionesComponent } from './canciones/canciones.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'albums', component: AlbumsComponent},
      { path: 'artistas', component: ArtistasComponent },
      { path: 'canciones', component: CancionesComponent },
      { path: 'estaciones', component: EstacionesComponent },
      { path: 'recientes', component: RecientesComponent },
      { path: '**', redirectTo: 'artistas'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicasRoutingModule { }
