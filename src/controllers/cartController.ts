import { Request, Response } from 'express';
import Cart, { ICart, ICartItem } from '../models/Cart';
import Product, { IProduct } from '../models/Product';

export const addProductToCart = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const cart = await Cart.findOne({ userId });

    if (cart) {
      const itemIndex = cart.items.findIndex((item) =>
        item.productId.equals(productId)
      );
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
      await cart.save();
    } else {
      const newCart = new Cart({ userId, items: [{ productId, quantity }] });
      await newCart.save();
    }

    res.status(200).json({ message: "Product added to cart" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getCart = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ userId }).populate('items.productId', 'name price');

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const total = cart.items.reduce((acc, item) => {
      // Cast item.productId to IProduct to ensure it has a price
      const product = item.productId as IProduct;
      return acc + item.quantity * product.price;
    }, 0);

    res.status(200).json({ cart, total });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
