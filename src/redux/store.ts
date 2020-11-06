import { applyMiddleware, createStore, combineReducers, Action, Middleware, Store, PreloadedState } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productListReducer } from "redux/product/reducer";
import { cartReducer } from "redux/cart/reducer";
import { authReducer } from "./user/reducer";
import { LS_TOKEN_VAR } from "utils/api";
import { LS_CART_ITEMS_VAR } from "utils/localStorage";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailsReducer,
  cart: cartReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

const cartItems = localStorage.getItem(LS_CART_ITEMS_VAR) ? JSON.parse(localStorage.getItem(LS_CART_ITEMS_VAR)!) : [];
const token = localStorage.getItem(LS_TOKEN_VAR) ? JSON.parse(localStorage.getItem(LS_TOKEN_VAR)!) : null;

const initialState: PreloadedState<RootState> = {
  cart: { items: cartItems },
  auth: { user: { ...token } }, // FIXME:
};
const middlewares: Middleware[] = [thunk];

const store: Store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
