import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import heroBannerReducer from "./reducers/heroBannerReducer";

const rootReducer = combineReducers({
  heroBanner: heroBannerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
