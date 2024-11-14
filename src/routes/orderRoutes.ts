import express from 'express';
import { placeOrder, getOrdersByCustomerId } from '../controllers/orderController.js';

const router = express.Router();

/**
 * @swagger
 * /orders/place:
 *   post:
 *     summary: Place a new order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               address:
 *                 type: string
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                     quantity:
 *                       type: number
 *     responses:
 *       201:
 *         description: Order placed successfully
 */
router.post('/place', placeOrder);

/**
 * @swagger
 * /orders/{customerId}:
 *   get:
 *     summary: Get orders by customer ID
 *     parameters:
 *       - in: path
 *         name: customerId
 *         required: true
 *         description: ID of the customer to get orders for
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of orders for the customer
 */
router.get('/:customerId', getOrdersByCustomerId);

export default router;
