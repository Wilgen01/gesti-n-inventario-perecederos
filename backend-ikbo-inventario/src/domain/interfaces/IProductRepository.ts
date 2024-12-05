import { ProductDto } from '../../application/dtos/ProductDto';
import { Product } from '../entities/Product';

export interface IProductRepository {
    createProduct(name: string): Promise<void>;
    listProductsOnStock(): Promise<ProductDto[]>;
    listProducts(): Promise<Product[]>;
}
