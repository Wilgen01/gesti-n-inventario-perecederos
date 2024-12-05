import { IProductRepository } from '../../domain/interfaces/IProductRepository';
import database from '../database/connection';
import { ProductDto } from '../../application/dtos/ProductDto';
import { Product } from '../../domain/entities/Product';

export class ProductRepository implements IProductRepository {

    async listProducts(): Promise<Product[]> {
         const [rows] = await database.query('SELECT *  FROM products ;');
        return rows as Product[];
    }

    async createProduct(name: string): Promise<void> {
        const query = 'INSERT INTO products (name) VALUES (?);';
        await database.execute(query, [name]);
    }

    async listProductsOnStock(): Promise<ProductDto[]> {
        const [rows] = await database.query('SELECT p.idProduct, p.name, ie.quantity, ie.expiryDate  FROM products p JOIN inventoryEntries ie on p.idProduct = ie.idProduct WHERE ie.quantity > 0 ;');
        return rows as ProductDto[];
    }
}
