import { Component, OnInit } from '@angular/core';
import { MusicasService } from '../services/musicas.service';

@Component({
  selector: 'app-estaciones',
  templateUrl: './estaciones.component.html',
  styleUrls: ['./estaciones.component.css']
})
export class EstacionesComponent implements OnInit {

  constructor(private musicaService: MusicasService) { }

  ngOnInit(): void {
    this.musicaService.getRadio();
  }

  get radios(){
    return this.musicaService.radios;
  }

}
