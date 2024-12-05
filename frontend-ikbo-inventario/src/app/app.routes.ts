import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./productos/productos.component').then(m => m.ProductosComponent)
    },
    {
        path: 'inventory-entry',
        loadComponent: () => import('./entrada-inventario/entrada-inventario.component').then(m => m.EntradaInventarioComponent)
    },
    {
        path: 'inventory-exit',
        loadComponent: () => import('./salida-inventario/salida-inventario.component').then(m => m.SalidaInventarioComponent),
    }

];
