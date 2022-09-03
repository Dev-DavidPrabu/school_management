import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import routes from "./Route/routes";
import store from "./store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>{routes}</BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
