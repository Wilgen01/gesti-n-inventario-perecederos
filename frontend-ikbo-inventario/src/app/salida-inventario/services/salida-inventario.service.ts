import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { InventoryExit } from '../models/InventoryExit.model';
import { Observable } from 'rxjs';
import { HttpResponse } from '../../shared/modelos/httpResponse.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalidaInventarioService {
  private readonly http = inject(HttpClient);

  public url = `${environment.apiUrl}/inventory-exit`;


  public addInventoryExit(entry: InventoryExit): Observable<HttpResponse<void>> {
    const body = {
      idProduct: entry.idProduct,
      quantity: entry.quantity,
      date: new Date().toISOString().split('T')[0]
    }
    return this.http.post<HttpResponse<void>>(`${this.url}/add-exit`, body);
  }
}
