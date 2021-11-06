import { Component, OnInit } from '@angular/core';
import { MusicasService } from '../../musicas/services/musicas.service';

@Component({
  selector: 'app-rock90s',
  templateUrl: './rock90s.component.html',
  styleUrls: ['./rock90s.component.css']
})
export class Rock90sComponent implements OnInit {

  constructor(private musicaService: MusicasService) { }

  ngOnInit(): void {
    this.musicaService.getRock();
  }
  get rocks(){
    return this.musicaService.rocks;
  }

}
