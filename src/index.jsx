import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "react-toastify/dist/ReactToastify.min.css";
import { Provider } from "react-redux";
import store from "./redux/configStore";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
