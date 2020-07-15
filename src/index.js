import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <App appTitle="PErson Manager" />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
