import { Component, OnInit } from '@angular/core';
import { MusicasService } from '../services/musicas.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(private musicaService: MusicasService) { }

  ngOnInit(): void {
    this.musicaService.getAlbums();
  }

  get albums(){
    return this.musicaService.albums;
  }

}
