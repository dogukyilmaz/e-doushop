import mongoose, { Schema, Document } from "mongoose";
import Review, { IReview } from "./Review";

export interface IProduct extends Document {
  user?: string;
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  rating: number;
  price: number;
  reviewCount: number;
  stockCount: number;
  reviews?: IReview[] | null;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductSchema: Schema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    name: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    stockCount: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    reviews: [Review.schema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IProduct>("Product", ProductSchema);
