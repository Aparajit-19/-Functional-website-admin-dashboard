import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import { fetchHeroBannerContent } from "../actions/heroBannerActions";

const HeroBanner: React.FC = () => {
  const dispatch = useDispatch();
  const heroBannerContent = useSelector(
    (state: RootState) => state.heroBanner.content
  );

  return (
    <div>
      <h1>{heroBannerContent.title}</h1>
      <p>{heroBannerContent.description}</p>
      {/* .......I have to add more content here at 7.00pm........  */}
    </div>
  );
};

export default HeroBanner;
