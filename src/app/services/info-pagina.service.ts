import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {}; 
  cargada = false; 

  equipo:any[] =[]; 

  constructor( private http: HttpClient) { 

    this.cargarInfo(); 
    this.cargarEquipo(); 

  }


  private cargarInfo(){

    //leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        //console.log(resp); 
        //console.log(resp ['twitter']); 
        //console.log(resp.twitter); //forma alternativa a la de encima

        this.cargada= true; 
        this.info = resp; 
    }); 

  }

  private cargarEquipo(){
    //leer el archivo JSON
    this.http.get('https://angular-html-430fb-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
    .subscribe((resp: any) => {
      this.equipo = resp; 
   
    }); 


  }
  
}
