import { applyMiddleware, createStore, combineReducers, Action, Middleware, Store } from "redux";
import thunk, { ThunkAction, ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "redux/product/reducer";

const rootReducer = combineReducers({
  product: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

const initialState = {};
const middlewares: Middleware[] = [thunk];

const store: Store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
