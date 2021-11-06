import { Component, ElementRef, ViewChild } from '@angular/core';
import { MusicasService } from '../services/musicas.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  constructor( private musicaService: MusicasService) { }

  buscar(){
    
    const valor = this.txtBuscar.nativeElement.value;

    if (valor.trim().length===0) {
      return;
    }

    this.musicaService.buscarArtista( valor);
    this.txtBuscar.nativeElement.value = '';
    
  }
  
  get resultados(){
    return this.musicaService.resultados;
  }


}
