import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { addComment } from './actions.js'

import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducer from "./reducer";
const enhancers = [];
if (window.devToolsExtension) {
  enhancers.push(window.devToolsExtension());
}

const store = createStore(reducer, [], compose(...enhancers));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));

