import React from "react";
import ReactDOM from "react-dom";
import "./static/css/dark.css";
import App from "./App";
import thunk from "redux-thunk";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/css/main.css";
import { createStore, compose, applyMiddleware } from "redux";
import allReducers from "./reducer";
import { Provider } from "react-redux";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
