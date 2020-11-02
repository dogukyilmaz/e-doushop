export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
export const PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL";

export interface ProductListState {
  products?: Product[];
  isLoading?: boolean;
  error?: any;
}

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

export interface IReview {
  name: string;
  rating: number;
  comment: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Product Actions // PL for ProductList
interface ProductListRequest {
  type: typeof PRODUCT_LIST_REQUEST;
  payload?: null;
}
interface ProductListSuccess {
  type: typeof PRODUCT_LIST_SUCCESS;
  payload: Product[];
}
interface ProductListFail {
  type: typeof PRODUCT_LIST_FAIL;
  payload: any; //error interface later
}

export type ProductListActionTypes = ProductListRequest | ProductListSuccess | ProductListFail;
