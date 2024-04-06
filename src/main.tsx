import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import Projects from "./routes/Projects";
import About from "./routes/About";
import "./styles/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
    errorElement: <Layout><ErrorPage /></Layout>,
  },
  {
    path: "/projects/:projectId",
    element: <Layout><Projects /></Layout>,
  },
  {
    path: "/about",
    element: <Layout><About /></Layout>,
  }
]);

const rootElement = document.getElementById('root')!;

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
