import { Request, Response } from "express";
import Order from "../models/Order";
import Cart from "../models/Cart";
import { IProduct } from "../models/Product";

export const placeOrder = async (req: Request, res: Response) => {
  try {
    const { userId, address } = req.body;

    const cart = await Cart.findOne({ userId }).populate(
      "items.productId",
      "price"
    );
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const total = cart.items.reduce((acc, item) => {
      // Cast item.productId to IProduct to ensure it has a price
      const product = item.productId as IProduct;
      return acc + item.quantity * product.price;
    }, 0);

    const order = new Order({
      userId,
      items: cart.items.map((item) => ({
        productId: item.productId._id,
        quantity: item.quantity,
      })),
      total,
      address,
      status: "Pending",
    });

    await order.save();
    await cart.remove();

    res
      .status(201)
      .json({ message: "Order placed successfully", orderId: order._id });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getOrdersByCustomerId = async (req: Request, res: Response) => {
  try {
    const { customerId } = req.params;
    const orders = await Order.find({ userId: customerId });

    if (!orders.length) {
      return res.status(404).json({ message: "No orders found" });
    }

    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
