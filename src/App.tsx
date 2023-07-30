import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import HeroBanner from "./components/HeroBanner";
import ContentSection from "./components/ContentSection";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <HeroBanner />
        <ContentSection />
      </div>
    </Provider>
  );
};

export default App;
