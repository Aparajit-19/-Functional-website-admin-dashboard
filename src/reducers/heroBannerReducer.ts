import{ HeroBannerActionTypes, HeroBannerState} from "../types/heroBannerTypes";

const initialState: HeroBannerState ={
  content: { title: "", description: "", image: ""},
  error: null,
};

const heroBannerReducer =(
  state = initialState,
  action: HeroBannerActionTypes
): HeroBannerState => {
  switch (action.type){
    case "FETCH_HERO_BANNER_CONTENT_SUCCESS":
      return {
        ...state,
        content: action.payload,
        error: null,
      };
    case "FETCH_HERO_BANNER_CONTENT_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default heroBannerReducer;
