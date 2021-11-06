import { Component} from '@angular/core';
import { MusicasService } from '../../musicas/services/musicas.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private musicaService : MusicasService) { }

  get historial(){
    return this.musicaService.historial;
  }

}
