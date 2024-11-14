import express from 'express';
import { addProductToCart, getCart } from '../controllers/cartController.js';

const router = express.Router();

/**
 * @swagger
 * /cart/add:
 *   post:
 *     summary: Add a product to the cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: number
 *     responses:
 *       200:
 *         description: Product added to cart
 */
router.post('/add', addProductToCart);

/**
 * @swagger
 * /cart/{userId}:
 *   get:
 *     summary: Get the user's cart
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to get cart for
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The user's cart and total price
 */
router.get('/:userId', getCart);

export default router;
