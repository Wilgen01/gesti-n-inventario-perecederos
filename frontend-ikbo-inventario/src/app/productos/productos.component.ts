import { Component, inject, OnInit } from '@angular/core';
import { ProductosService } from './services/productos.service';
import { ProductosStock } from './models/productosStock.model';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { StockProductosComponent } from '../shared/components/stock-productos/stock-productos.component';

@Component({
  selector: 'app-productos',
  imports: [MatTableModule, MatSortModule, StockProductosComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent implements OnInit {
  private readonly productsService = inject(ProductosService);
  public productos: ProductosStock[] = [];

  ngOnInit(): void {
    this.getProductos();
  }

  public getProductos(): void {
    this.productsService.getProductosStock().subscribe({
      next: (productos: ProductosStock[]) => {
        this.productos = productos;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
