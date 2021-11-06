import { Component, OnInit} from '@angular/core';
import { MusicasService } from '../services/musicas.service';
import { Musica } from '../../interfaces/musica';

@Component({
  selector: 'app-recientes',
  templateUrl: './recientes.component.html',
  styleUrls: ['./recientes.component.css']
})
export class RecientesComponent implements OnInit{

  

  constructor(private musicaService: MusicasService) {


   }

  ngOnInit():void{
    this.musicaService.getReciente();
  }
  
  get recientes(){
    return this.musicaService.recientes;
  }

}
