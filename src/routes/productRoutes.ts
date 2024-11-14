import express from "express";
import {
  addProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
} from "../controllers/productController.js";

const router = express.Router();

/**
 * @swagger
 * /products/addproduct:
 *   post:
 *     summary: Add a new product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Product added successfully
 */
router.post("/addproduct", addProduct);

/**
 * @swagger
 * /products/updateproduct/{productId}:
 *   put:
 *     summary: Update an existing product
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         description: ID of the product to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product updated successfully
 */
router.put("/updateproduct/:productId", updateProduct);

/**
 * @swagger
 * /products/deleteproduct/{productId}:
 *   delete:
 *     summary: Delete a product by ID
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         description: ID of the product to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted successfully
 */
router.delete("/deleteproduct/:productId", deleteProduct);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     responses:
 *       200:
 *         description: List of all products
 */
router.get("/", getAllProducts);

export default router;
