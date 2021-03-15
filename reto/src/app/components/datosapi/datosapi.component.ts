import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-datosapi',
  templateUrl: './datosapi.component.html',
  styleUrls: ['./datosapi.component.css']
})
export class DatosapiComponent implements OnInit {
  misProductos:Array<any> 
  subscripcionProductos: Subscription


  constructor(
    private _sProducto: ProductoService
  ) { }

  obtenerProductos(){
    this.subscripcionProductos = this._sProducto.getProductos()
    .subscribe((datos) => {
      this.misProductos = datos
    })
  }

  ngOnInit(): void {
   
    this.obtenerProductos()
  }

  

 
  
}
