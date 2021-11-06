import { Component, ElementRef, ViewChild } from '@angular/core';
import { MusicasService } from '../services/musicas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor ( private musicaService: MusicasService) {}

  buscar(){
    
    const valor = this.txtBuscar.nativeElement.value;

    if (valor.trim().length===0) {
      return;
    }

    this.musicaService.buscarArtista( valor);
    this.txtBuscar.nativeElement.value = '';
    
  }

}
