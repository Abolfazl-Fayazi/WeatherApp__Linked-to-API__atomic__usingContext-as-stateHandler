import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";
import App from "./App";
import { StateContextProvider } from "./states/states-context";

ReactDOM.render(
  <React.StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
