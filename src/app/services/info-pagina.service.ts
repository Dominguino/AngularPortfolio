import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any = {}; 
  cargada = false; 

  constructor( private http: HttpClient) { 
    console.log('Servicio de infoPagina listo'); 

    //leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: any) => {
        console.log(resp); 
        //console.log(resp ['twitter']); 
        //console.log(resp.twitter); //forma alternativa a la de encima

        this.cargada= true; 
        this.info = resp; 
    }); 


  }
}
