import express from 'express';
import { addProductToCart, getCart } from '../controllers/cartController.js';

const router = express.Router();

router.post('/add', addProductToCart);
router.get('/:userId', getCart);

export default router;
