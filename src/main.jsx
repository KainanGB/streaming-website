import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global/index.css";
import GlobalCSS from "./global/global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalCSS />
    <App />
  </React.StrictMode>
);
