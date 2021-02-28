import { IReview } from "models/Review";

export interface Product {
  _id?: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  stockCount: number;
  rating: number;
  reviewCount: number;
  user?: string;
  reviews?: IReview[] | null;
  createdAt?: Date;
  updatedAt?: Date;
}
