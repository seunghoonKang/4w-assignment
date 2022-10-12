import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reducer from "../modules/todos";

const rootReducer = combineReducers({
  reducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

export default store;
