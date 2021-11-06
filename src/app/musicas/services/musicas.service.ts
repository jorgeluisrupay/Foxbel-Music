import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  private _historial: string[] = [];

  public resultados: any[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor (private http: HttpClient) {}

  buscarArtista(query: string =''){
    
    query = query.trim().toLowerCase();
    
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial= this._historial.splice(0,10);
    }
    const url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/';
    this.http.get(`${url}artist/?q=${ query }&index=0&limit=10`)
          .subscribe( (resp:any) =>{
            console.log(resp.data);
            this.resultados = resp.data;
          })

  }

  

}
