import { Component, OnInit } from '@angular/core';
import { MusicasService } from '../../musicas/services/musicas.service';

@Component({
  selector: 'app-baladas',
  templateUrl: './baladas.component.html',
  styleUrls: ['./baladas.component.css']
})
export class BaladasComponent implements OnInit {

  constructor(private musicaService: MusicasService) { }

  ngOnInit(): void {
    this.musicaService.getBaladas();
  }

  get baladas(){
    return this.musicaService.baladas;
  }
}
