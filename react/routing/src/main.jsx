import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Context from "./context/Context.jsx";
// ReactDOM.createRoot(document.getElementById("root")).render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
// );

// i want to wrap the application in Context
ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Context>
);