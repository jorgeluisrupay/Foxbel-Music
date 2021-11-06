import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'milibreria',
    loadChildren: () => 
    import('./musicas/musicas.module').then( m => m.MusicasModule)
  },
  {
    path: 'playlists',
    loadChildren: () => 
    import('./playlists/playlists.module').then( m => m.PlaylistsModule)
  },
  {
    path: '**',
    redirectTo: 'milibreria'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
