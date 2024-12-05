import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { ProductosService } from '../productos/services/productos.service';
import { EntradaInventarioService } from './services/entrada-inventario.service';
import { TablaEntradaInventarioComponent } from './components/tabla-entrada-inventario/tabla-entrada-inventario.component';
import { Productos } from '../productos/models/productos.model';
import { InventoryEntryDetail } from './models/InventoryEntryDetail.model';

@Component({
  selector: 'app-entrada-inventario',
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatDatepickerModule, MatSelectModule, MatNativeDateModule, MatInputModule, MatButton, TablaEntradaInventarioComponent],
  templateUrl: './entrada-inventario.component.html',
  styleUrl: './entrada-inventario.component.scss'
})
export class EntradaInventarioComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly productsService = inject(ProductosService);
  private readonly entradaInventarioService = inject(EntradaInventarioService);

  inventoryForm: FormGroup = new FormGroup({});
  productos: Productos[] = [];
  entries: InventoryEntryDetail[] = [];

  ngOnInit(): void {
    this.initForm();
    this.getProductos();
    this.getInventoryEntries();
  }

  public getProductos(): void {
    this.productsService.getProductos().subscribe({
      next: (productos: Productos[]) => {
        this.productos = productos;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  onSubmit(): void {
    if (this.inventoryForm.invalid) return;
    const formValue = this.inventoryForm.value;
    
    this.entradaInventarioService.addInventoryEntry(formValue)
    .subscribe({
      next: () => {
        this.getInventoryEntries()
        this.inventoryForm.reset();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  public getInventoryEntries(): void {
    this.entradaInventarioService.getInventoryEntries().subscribe({
      next: (entries: InventoryEntryDetail[]) => {
        this.entries = entries;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  initForm(): void {
    this.inventoryForm = this.fb.group({
      idProduct: [null, Validators.required],
      quantity: [null, [Validators.required, Validators.min(1)]],
      expiryDate: [null, Validators.required],
    });
  }
}
