export const PRODUCTS_LIST_REQUEST = "PRODUCTS_LIST_REQUEST";
export const PRODUCTS_LIST_SUCCESS = "PRODUCTS_LIST_SUCCESS";
export const PRODUCTS_LIST_FAIL = "PRODUCTS_LIST_FAIL";

export const GET_SINGLE_PRODUCT = "GET_SINGLE_PRODUCT";

export interface ProductState {
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
  type: typeof PRODUCTS_LIST_REQUEST;
  payload?: null;
}
interface ProductListSuccess {
  type: typeof PRODUCTS_LIST_SUCCESS;
  payload: Product[];
}
interface ProductListFail {
  type: typeof PRODUCTS_LIST_FAIL;
  payload: any; //error interface later
}

export type ProductActionTypes = ProductListRequest | ProductListSuccess | ProductListFail;
