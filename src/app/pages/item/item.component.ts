import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/producto.interface';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  producto : any; 
  id: string; 

  constructor( private route: ActivatedRoute, 
    public productoService: ProductosService ){
      this.id=''; 
      
    }

  ngOnInit() {
    this.route.params.subscribe( parametros => {


      this.productoService.getProducto(parametros['id'])
      .subscribe((producto: any)=> {
        this.id = parametros['id']; 
        this.producto = producto; 
      })


    });
  }

}
