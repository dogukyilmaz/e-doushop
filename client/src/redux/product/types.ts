export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
export const PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL";

export const PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST";
export const PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS";
export const PRODUCT_DETAILS_FAIL = "PRODUCT_DETAILS_FAIL";

export interface ProductListState {
  products: Product[];
  isLoading: boolean;
  error: any;
}

export interface ProductDetailsState {
  product: Product;
  isLoading: boolean;
  error: any;
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

// Product List Actions
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

// Product Details Actions
interface ProductDetailsRequest {
  type: typeof PRODUCT_DETAILS_REQUEST;
  payload?: null;
}
interface ProductDetailsSuccess {
  type: typeof PRODUCT_DETAILS_SUCCESS;
  payload: Product[];
}
interface ProductDetailsFail {
  type: typeof PRODUCT_DETAILS_FAIL;
  payload: any; //error interface later
}

export type ProductDetailsActionTypes = ProductDetailsRequest | ProductDetailsSuccess | ProductDetailsFail;
