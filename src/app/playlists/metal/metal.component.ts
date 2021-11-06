import { Component, OnInit } from '@angular/core';
import { MusicasService } from '../../musicas/services/musicas.service';

@Component({
  selector: 'app-metal',
  templateUrl: './metal.component.html',
  styleUrls: ['./metal.component.css']
})
export class MetalComponent implements OnInit {

  constructor(private musicaService: MusicasService) { }

  ngOnInit(): void {
    this.musicaService.getMetal();
  }

  get metals(){
    return this.musicaService.metals;
  }

}
