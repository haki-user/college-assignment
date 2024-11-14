import express from 'express';
import { signup, signin } from '../controllers/authController';

const router = express.Router();

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     description: Register a new user
 */
router.post('/signup', signup);

/**
 * @swagger
 * /auth/signin:
 *   post:
 *     description: Login an existing user
 */
router.post('/signin', signin);

export default router;
