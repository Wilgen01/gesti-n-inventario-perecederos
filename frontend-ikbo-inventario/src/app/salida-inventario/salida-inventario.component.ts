import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Productos } from '../productos/models/productos.model';
import { ProductosService } from '../productos/services/productos.service';
import { SalidaInventarioService } from './services/salida-inventario.service';
import { StockProductosComponent } from '../shared/components/stock-productos/stock-productos.component';
import { ProductosStock } from '../productos/models/productosStock.model';

@Component({
  selector: 'app-salida-inventario',
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatDatepickerModule, MatSelectModule, MatNativeDateModule, MatInputModule, MatButton, StockProductosComponent],
  templateUrl: './salida-inventario.component.html',
  styleUrl: './salida-inventario.component.scss'
})
export class SalidaInventarioComponent {
  private readonly fb = inject(FormBuilder);
  private readonly productsService = inject(ProductosService);
  private readonly salidaInventarioService = inject(SalidaInventarioService);

  inventoryForm: FormGroup = new FormGroup({});
  productos: Productos[] = [];
  productosStock: ProductosStock[] = [];

  ngOnInit(): void {
    this.initForm();
    this.getProductos();
    this.getProductosStock();
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

  public getProductosStock(): void {
    this.productsService.getProductosStock().subscribe({
      next: (productos: ProductosStock[]) => {
        this.productosStock = productos;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  onSubmit(): void {
    if (this.inventoryForm.invalid) return;
    const formValue = this.inventoryForm.value;

    this.salidaInventarioService.addInventoryExit(formValue)
      .subscribe({
        next: (res) => {
          this.inventoryForm.reset();
          this.getProductosStock();
        },
        error: ({ error }: any) => {
          const mensaje = error.error ? error.error : 'Ha ocurrido un error no controlado';
          alert(mensaje);
        }
      });
  }

  initForm(): void {
    this.inventoryForm = this.fb.group({
      idProduct: [null, Validators.required],
      quantity: [null, [Validators.required, Validators.min(1)]],
    });
  }
}
