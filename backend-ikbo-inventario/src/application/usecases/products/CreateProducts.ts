import { IProductRepository } from '../../../domain/interfaces/IProductRepository';

export class CreateProduct {
    constructor(private readonly productRepository: IProductRepository) {}

    async execute(name: string): Promise<void> {
        await this.productRepository.createProduct(name);
    }
}
