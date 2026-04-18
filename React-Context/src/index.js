import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import AuthProvider from "./contexts/auth/AuthProvider";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";

import Header from "./components/Header";

import Home from "./routes/Home";
import Users from "./routes/Users";
import User from "./routes/User";


import Error from "./routes/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
        {
            path: "",
            element: <Home />,
          },
        {
            path: "users",
            element: <Users />,
          },
          {
            path: "users/:userId",
            element: <User />
          },
          {
            path: "hotels",
            element: <Error />,
            
          },
          
      ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
</ThemeProvider>
);

reportWebVitals();
