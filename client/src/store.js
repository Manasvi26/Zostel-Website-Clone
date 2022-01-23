import { createStore, combineReducers } from "redux";
import { cartReducer } from "./Features/Cart/Reducers";

const rootReducer=combineReducers({
    cart:cartReducer
});

export const store=createStore(rootReducer);
// console.log(store.getState())