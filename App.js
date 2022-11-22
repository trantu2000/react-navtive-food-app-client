import React from "react";
import Navigators from "./src/navigators";
import { Provider } from "react-redux";
import { Store } from "./src/Redux/Store";


export default () => (
  <Provider store={Store}>
    <Navigators />
  </Provider>
);
