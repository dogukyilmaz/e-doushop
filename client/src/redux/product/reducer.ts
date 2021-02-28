import * as productTypes from "redux/product/types";

const initialProductList: productTypes.ProductListState = {
  products: [],
  isLoading: false,
  error: null,
};

const initialProductDetails: productTypes.ProductDetailsState = {
  product: {
    name: "",
    image: "",
    description: "",
    brand: "",
    category: "",
    price: 0,
    stockCount: 0,
    rating: 0,
    reviewCount: 0,
    reviews: [],
  },
  isLoading: false,
  error: null,
};

export const productListReducer = (
  state = initialProductList,
  action: productTypes.ProductListActionTypes
): productTypes.ProductListState => {
  const { type, payload } = action;

  switch (type) {
    case productTypes.PRODUCT_LIST_REQUEST:
      return {
        ...initialProductList,
        isLoading: true,
      };
    case productTypes.PRODUCT_LIST_SUCCESS:
      return {
        ...initialProductList,
        products: payload,
      };
    case productTypes.PRODUCT_LIST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return { ...state };
  }
};

export const productDetailsReducer = (
  state = initialProductDetails,
  action: productTypes.ProductDetailsActionTypes
): productTypes.ProductDetailsState => {
  const { type, payload } = action;

  switch (type) {
    case productTypes.PRODUCT_DETAILS_REQUEST:
      return {
        ...initialProductDetails,
        isLoading: true,
      };
    case productTypes.PRODUCT_DETAILS_SUCCESS:
      return {
        ...initialProductDetails,
        product: payload,
      };
    case productTypes.PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return { ...state };
  }
};
