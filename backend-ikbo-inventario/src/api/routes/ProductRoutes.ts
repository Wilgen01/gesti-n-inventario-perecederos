import { Router } from 'express';
import { createProduct, listProducts, listProductsOnStock } from '../controllers/ProductController';

const router = Router();

router.get('/products/get-products-stock', listProductsOnStock);
router.get('/products/get-products', listProducts);
router.post('/products/create-product', createProduct);

export default router;
