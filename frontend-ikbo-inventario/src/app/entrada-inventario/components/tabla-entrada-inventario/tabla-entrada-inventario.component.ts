import { Component, inject, Input } from '@angular/core';
import { EntradaInventarioService } from '../../services/entrada-inventario.service';
import { InventoryEntryDetail } from '../../models/InventoryEntryDetail.model';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tabla-entrada-inventario',
  imports: [MatTableModule, DatePipe],
  templateUrl: './tabla-entrada-inventario.component.html',
  styleUrl: './tabla-entrada-inventario.component.scss'
})
export class TablaEntradaInventarioComponent {
  @Input({ required: true }) entries: InventoryEntryDetail[] = [];
  private readonly entradaInventarioService = inject(EntradaInventarioService);

  displayedColumns: string[] = [
    'idEntry',
    'productName',
    'quantity',
    'expiryDate',
    'status',
  ];

}
