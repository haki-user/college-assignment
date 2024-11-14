import express from 'express';
import { addProduct, updateProduct, deleteProduct, getAllProducts } from '../controllers/productController';

const router = express.Router();

router.post('/addproduct', addProduct);
router.put('/updateproduct/:productId', updateProduct);
router.delete('/deleteproduct/:productId', deleteProduct);
router.get('/', getAllProducts);

export default router;
