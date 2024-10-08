import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Create from "./components/Create.jsx";
import LearnReact from "./components/LearnReact.jsx";
import FormikForm from "./components/FormikForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/react",
    element: <LearnReact />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/edit/:id",
    element: <Create />,
  },
  {
    path: "/formik-form",
    element: <FormikForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
