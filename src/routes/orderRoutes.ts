import express from 'express';
import { placeOrder, getOrdersByCustomerId } from '../controllers/orderController';

const router = express.Router();

router.post('/place', placeOrder);
router.get('/:customerId', getOrdersByCustomerId);

export default router;
