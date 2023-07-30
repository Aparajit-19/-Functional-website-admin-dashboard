import { combineReducers } from "redux";
import heroBannerReducer from "./heroBannerReducer";

const rootReducer = combineReducers({
  heroBanner: heroBannerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
