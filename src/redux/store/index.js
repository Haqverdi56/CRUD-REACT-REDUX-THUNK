import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import customerReducer from "../reducers/customer.reducers";
import favoritesReducer from "../reducers/favoriteReducers";

const reducers = combineReducers({
    customer: customerReducer,
    favorites: favoritesReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store