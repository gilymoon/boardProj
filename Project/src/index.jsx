import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const rootElem = document.querySelector("#root");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElem
);
