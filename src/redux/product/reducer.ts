import * as productTypes from "redux/product/types";

const initialProductList: productTypes.ProductListState = {
  products: [],
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
