import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./RouterProvider.jsx";
import ContextProvider from "./Components/context api/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <RouterProvider router={router}></RouterProvider>
  </ContextProvider>
);
