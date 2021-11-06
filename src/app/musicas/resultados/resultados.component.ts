import { Component, OnInit } from '@angular/core';
import { MusicasService } from '../services/musicas.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent  {

  get resultados(){
    return this.musicaService.resultados;
  }

  constructor(private musicaService: MusicasService) { }


}
