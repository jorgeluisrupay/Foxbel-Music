import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Musica } from '../../interfaces/musica';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  private _historial: string[] = [];

  public resultados: any[] = [];

  public recientes: any[] = [];

  public rocks: any[] = [];

  public baladas: any[] = [];

  public metals: any[] = [];

  public salsas: any[] = [];

  public radios: any[] = [];

  public albums: any[] = [];






  
  url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/';
  


  constructor (private http: HttpClient) {}

  buscarArtista(query: string =''){
    
    query = query.trim().toLowerCase();
    
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial= this._historial.splice(0,10);
    }
    /* Artista*/
    
    this.http.get(`${this.url}artist/?q=${ query }&index=0&limit=10`)
          .subscribe( (resp:any) =>{
            console.log(resp.data);
            this.resultados = resp.data;
          })
  }
  /*Reciente por defecto adela*/
   getReciente(){
    this.http.get(`${this.url}artist/?q=adele&index=0&limit=10`)
          .subscribe( (resp:any) =>{
            console.log(resp.data);
            this.recientes = resp.data;
          })
  }
  getRock(){
    this.http.get(`${this.url}artist/?q=rock&index=0&limit=10`)
        .subscribe( (resp:any) =>{
          console.log(resp.data);
          this.rocks = resp.data;
        })
  }
  getBaladas(){
    this.http.get(`${this.url}artist/?q=baladas&index=0&limit=10`)
        .subscribe( (resp:any) =>{
          console.log(resp.data);
          this.baladas = resp.data;
        })
  }

  getMetal(){
    this.http.get(`${this.url}artist/?q=metals&index=0&limit=10`)
        .subscribe( (resp:any) =>{
          console.log(resp.data);
          this.metals = resp.data;
        })
  }

  getBailar(){
    this.http.get(`${this.url}artist/?q=salsa&index=0&limit=10`)
        .subscribe( (resp:any) =>{
          console.log(resp.data);
          this.salsas = resp.data;
        })
  }

  getRadio(){
    this.http.get(`${this.url}artist/?q=radio&index=0&limit=10`)
        .subscribe( (resp:any) =>{
          console.log(resp.data);
          this.radios = resp.data;
        })
  }

  getAlbums(){
    this.http.get(`${this.url}artist/?q=albums&index=0&limit=30`)
        .subscribe( (resp:any) =>{
          console.log(resp.data);
          this.albums = resp.data;
        })
  }
}
