import { createStore, combineReducers } from "redux";
import { cartReducer } from "./Features/Cart/Reducers";
import { formReducer } from "./Features/Form/Reducers";

const rootReducer = combineReducers({
  cart: cartReducer,
  form: formReducer,
});

export const store = createStore(rootReducer);
// console.log(store.getState())
