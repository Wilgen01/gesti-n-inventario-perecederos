import { IProductRepository } from '../../../domain/interfaces/IProductRepository';
import { ProductDto } from '../../dtos/ProductDto';

export class ListProductsOnStock {
    constructor(private readonly productRepository: IProductRepository) {}

    async execute(): Promise<ProductDto[]> {
        const products = await this.productRepository.listProductsOnStock();
        const grouped = new Map<number, ProductDto>();

        for (const entry of products) {
            const status = this.getStatus(new Date(entry.expiryDate));
    
            if (!grouped.has(entry.idProduct)) {
                grouped.set(entry.idProduct, {
                    idProduct: entry.idProduct,
                    name: entry.name,
                    quantity: products.filter(p => p.idProduct === entry.idProduct).reduce((acc, p) => acc + p.quantity, 0),
                    expiryDate: entry.expiryDate,
                    qtyPorVencer: 0,
                    qtyVigente: 0,
                    qtyVencido: 0,
                });
            }
    
            const product = grouped.get(entry.idProduct)!;
            product[status] += entry.quantity;
        }
    
        return Array.from(grouped.values());
    }


    private getStatus(expiryDate: Date): 'qtyVigente' | 'qtyPorVencer' | 'qtyVencido' {
        const today = new Date();
        const diff = (expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);

        if (diff < 0) {
            return 'qtyVencido';
        } else if (diff <= 3) {
            return 'qtyPorVencer';
        } else {
            return 'qtyVigente';
        }
    }
}
