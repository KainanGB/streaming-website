import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global/index.css";
import GlobalCSS from "./global/global";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalCSS />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
