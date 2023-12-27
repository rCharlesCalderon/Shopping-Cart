import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import Shop from "./Shop.jsx";
import Navbar from "./Navbar.jsx";
import AboutManga from "./AboutManga.jsx";
import { useState } from "react";

function Router() {
  const [cart, setCart] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/Home",
      element: (
        <>
          <Home cart={cart} setCart={setCart} />
        </>
      ),
    },
    {
      path: "/shop",
      element: (
        <>
          <Navbar cart={cart} setCart={setCart} />
          <Shop />
        </>
      ),
    },
    {
      path: "/shop/:id",
      element: (
        <>
          <Navbar cart={cart} setCart={setCart} />
          <AboutManga setCart={setCart} cart={cart} />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;


