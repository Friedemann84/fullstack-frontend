import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterForm from "./components/RegisterForm.jsx";
import Home from "./components/Home.jsx";
import LoginForm from "./components/Home.jsx";
import Geheim from "./components/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "register",
        element: <RegisterForm />
      },
      {
        path: "login",
        element: <LoginForm />
      },
      {
        path: 'geheim',
        element: <Geheim />
      }
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>
);
