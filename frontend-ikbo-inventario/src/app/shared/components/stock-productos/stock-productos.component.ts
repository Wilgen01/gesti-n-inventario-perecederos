import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ProductosStock } from '../../../productos/models/productosStock.model';

@Component({
  selector: 'app-stock-productos',
  imports: [MatTableModule, MatSortModule],
  templateUrl: './stock-productos.component.html',
  styleUrl: './stock-productos.component.scss'
})
export class StockProductosComponent implements AfterViewInit, OnChanges {
  @Input({ required: true }) productos: ProductosStock[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  public displayedColumns: string[] = [
    'name',
    'quantity',
    'qtyVigente',
    'qtyPorVencer',
    'qtyVencido',
  ];
  public productosDs: MatTableDataSource<ProductosStock> = new MatTableDataSource<ProductosStock>();

  ngAfterViewInit() {
    this.productosDs.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productos']) {
      this.productosDs.data = changes['productos'].currentValue;
    }
  }
}
