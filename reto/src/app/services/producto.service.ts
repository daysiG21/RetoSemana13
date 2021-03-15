import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  url:string = "https://601e0134be5f340017a1a122.mockapi.io/productos"

  constructor(private _sHttp:HttpClient ) {}

  getProductos(): Observable<any>{
    // .get(URL) necesita la URL como parametro
    return this._sHttp.get(this.url)
  }

}
