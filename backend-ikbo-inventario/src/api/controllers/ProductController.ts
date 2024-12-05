import { Request, Response } from 'express';
import { ProductRepository } from '../../infrastructure/repositories/ProductRepository';
import { ListProductsOnStock } from '../../application/usecases/products/ListProductsOnStock';
import { CreateProduct } from '../../application/usecases/products/CreateProducts';
import { ListProducts } from '../../application/usecases/products/ListProducts';

const productRepository = new ProductRepository();
const listProductsOnStockUseCase = new ListProductsOnStock(productRepository);
const listProductsUseCase = new ListProducts(productRepository);
const createProductUseCase = new CreateProduct(productRepository);

export const listProductsOnStock = async (req: Request, res: Response) => {
    try {
        const products = await listProductsOnStockUseCase.execute();
        res.status(200).json({ message: 'Proceso exitoso', data: products });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const listProducts = async (req: Request, res: Response) => {
    try {
        const products = await listProductsUseCase.execute();
        res.status(200).json({ message: 'Proceso exitoso', data: products });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const products = await createProductUseCase.execute(name);
        res.status(200).json({ message: 'Proceso exitoso', data: products });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
