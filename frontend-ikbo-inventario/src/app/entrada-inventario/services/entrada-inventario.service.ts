import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { InventoryEntry } from '../models/InventoryEntry.model';
import { map, Observable } from 'rxjs';
import { InventoryEntryDetail } from '../models/InventoryEntryDetail.model';
import { HttpResponse } from '../../shared/modelos/httpResponse.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntradaInventarioService {
  private readonly http = inject(HttpClient);

  public url = `${environment.apiUrl}/inventory-entry`;


  public addInventoryEntry(entry: InventoryEntry): Observable<HttpResponse<void>> {
    const body = {
      idProduct: entry.idProduct,
      quantity: entry.quantity,
      expiryDate: entry.expiryDate.toISOString().split('T')[0]
    }
    return this.http.post<HttpResponse<void>>(`${this.url}/add-entry`, body);
  }

  public getInventoryEntries(): Observable<InventoryEntryDetail[]> { 
    return this.http.get<HttpResponse<InventoryEntryDetail[]>>(`${this.url}/get-entries`).pipe(
      map((response: HttpResponse<InventoryEntryDetail[]>) => response.data)
    );
  }
}
