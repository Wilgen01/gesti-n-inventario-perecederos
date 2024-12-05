import { Product } from '../../../domain/entities/Product';
import { IProductRepository } from '../../../domain/interfaces/IProductRepository';
import { ProductDto } from '../../dtos/ProductDto';

export class ListProducts {
    constructor(private readonly productRepository: IProductRepository) { }

    async execute(): Promise<Product[]> {
        return await this.productRepository.listProducts();
    }
}
