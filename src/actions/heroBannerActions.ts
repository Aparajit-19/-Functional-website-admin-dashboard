import axios from "axios";
import { Dispatch } from "redux";
import { HeroBannerContent, HeroBannerActionTypes } from "../types/heroBannerTypes";
import { API_URL } from "../api/api";

export const fetchHeroBannerContent = () => {
    return async (dispatch: Dispatch<HeroBannerActionTypes>) => {
      try {
        const response = await axios.get<HeroBannerContent>(`${API_URL}/hero-banner`);
        dispatch({
          type: "FETCH_HERO_BANNER_CONTENT_SUCCESS",
          payload: response.data,
        });
      } catch (error) {
        const errorMessage = (error as Error).message; 
        dispatch({
          type: "FETCH_HERO_BANNER_CONTENT_FAILURE",
          payload: errorMessage,
        });
      }
    };
  };
  