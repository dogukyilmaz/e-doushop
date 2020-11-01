export interface IProduct {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  stockCount: number;
  rating: number;
  reviewCount: number;
}

declare function getTy(a: number): boolean;
