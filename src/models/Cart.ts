import mongoose, { Schema, Document, Types } from 'mongoose';
import { IProduct } from './Product.js';

export interface ICartItem {
  productId: Types.ObjectId | IProduct; // Allows `productId` to be either an ObjectId or a populated IProduct
  quantity: number;
}

export interface ICart extends Document {
  userId: mongoose.Types.ObjectId;
  items: ICartItem[];
}

const cartSchema = new Schema<ICart>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true, min: 1 }
    }
  ]
});

export default mongoose.model<ICart>('Cart', cartSchema);
