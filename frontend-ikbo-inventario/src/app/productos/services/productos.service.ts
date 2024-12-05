import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductosStock } from '../models/productosStock.model';
import { map, Observable } from 'rxjs';
import { HttpResponse } from '../../shared/modelos/httpResponse.model';
import { Productos } from '../models/productos.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private readonly http = inject(HttpClient);

  public url = `${environment.apiUrl}/products`;


  public getProductosStock(): Observable<ProductosStock[]> {
    return this.http.get<HttpResponse<ProductosStock[]>>(`${this.url}/get-products-stock`).pipe(
      map((response: HttpResponse<ProductosStock[]>) => response.data)
    );
  }

  public getProductos(): Observable<Productos[]> {
    return this.http.get<HttpResponse<Productos[]>>(`${this.url}/get-products`).pipe(
      map((response: HttpResponse<Productos[]>) => response.data)
    );
  }
  

}
