import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  user: string;
  orderItems: OrderItem[];
  shippingAddress: Address;
  paymentMethod: PaymentMethod;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  cartFee: number;
  isPaid: boolean;
  paidAt: Date;
  isDelivered: boolean;
  deliveredAt: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

interface OrderItem {
  name: string;
  quantity: number;
  image: string;
  price: number;
  product: string;
}

interface PaymentMethod {
  id?: string;
  status?: string;
  update_time?: string;
  email_adress?: string;
}

interface Address {
  address: string;
  city: string;
  zipcode: string;
  country: string;
}

const OrderSchema: Schema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    orderItems: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Product" },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      zipcode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_adress: { type: String },
    },
    taxPrice: { type: Number, default: 0.0 },
    shippingPrice: { type: Number, default: 0.0 },
    totalPrice: { type: Number, default: 0.0 },
    cartFee: { type: Number, default: 0.0 },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IOrder>("Order", OrderSchema);
