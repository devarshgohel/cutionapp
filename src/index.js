import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Test } from "./test";
import { Demo } from "./demo";
import { Header } from "./header";
import { Contact } from "./contact";

const AppRouter = createBrowserRouter([
  { path: "/", element: <><Header /><App /></> },
  { path: "/app", element: <><Header /><App /></> },
  { path: "/test", element: <><Header /><Test /></> },
  { path: "/demo", element: <><Header /><Demo /></> },
  { path: "/contact", element: <><Header /><Contact /></> },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={AppRouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();