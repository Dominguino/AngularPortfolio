import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface'; 

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true; 

  constructor( private http: HttpClient) { 

    this.cargarProductos(); 
  }

  private cargarProductos(){
    this.http.get('https://angular-html-430fb-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
    .subscribe( (resp: any) => {
      console.log(resp); 


      this.cargando= false; 
    });


  }



}
