import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
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
  const isAuth = useSelector((state)=>state.auth.isAuthorised);
  console.log(isAuth);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: isAuth?<Home />:<Navigate to="/login"/>
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
          element: isAuth?<Settings />:<Navigate to='/login'/>,
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
