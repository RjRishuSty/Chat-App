import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "@emotion/react";
import AppLayout from "./Layouts/AppLayout";
import { CssBaseline } from "@mui/material";
import { createAppTheme } from "../theme";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Signup from "./pages/Signup";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const App = () => {
  const mode = useSelector((state) => state.appMode.appMode);
  const theme = createAppTheme(mode);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/setting",
          element: <Settings />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
