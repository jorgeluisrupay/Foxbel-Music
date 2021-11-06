import { Component} from '@angular/core';
interface MenuItem{
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  milibreriaMenu: MenuItem[] = [
    {
      texto: 'Recientes',
      ruta: './milibreria/recientes'
    },
    {
      texto: 'Artistas',
      ruta: './milibreria/artistas'
    },
    {
      texto: 'Albums',
      ruta: './milibreria/albums'
    },
    {
      texto: 'Canciones',
      ruta: './milibreria/canciones'
    },
    {
      texto: 'Estaciones',
      ruta: './milibreria/estaciones'
    }
  ];
  playlistMenu: MenuItem[] = [
    {
      texto: 'Metals',
      ruta: './playlists/metal'
    },
    {
      texto: 'Para Bailar',
      ruta: './playlists/parabailar'
    },
    {
      texto: 'Rock 90s',
      ruta: './playlists/rock'
    },
    {
      texto: 'Baladas',
      ruta: './playlists/baladas'
    }
  ];

}
