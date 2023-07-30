export interface HeroBannerContent{
    title: string;
    description: string;
    image: string;
  }
  
  export type HeroBannerActionTypes =
    |{type: "FETCH_HERO_BANNER_CONTENT_SUCCESS"; payload: HeroBannerContent}
    |{type: "FETCH_HERO_BANNER_CONTENT_FAILURE"; payload: string };
  
  export interface HeroBannerState{
    content: HeroBannerContent;
    error: string | null;
  }
  