import { Component, OnInit } from '@angular/core';
import { MusicasService } from '../../musicas/services/musicas.service';

@Component({
  selector: 'app-parabailar',
  templateUrl: './parabailar.component.html',
  styleUrls: ['./parabailar.component.css']
})
export class ParabailarComponent implements OnInit {

  constructor(private musicaService: MusicasService) { }

  ngOnInit(): void {
    this.musicaService.getBailar();
  }

  get salsas(){
    return this.musicaService.salsas;
  }

}
