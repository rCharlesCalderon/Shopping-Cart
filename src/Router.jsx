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
      path: "/",
      element: (
        <>
          <Navbar cart={cart} />,
          <Home />,
        </>
      ),
    },
    {
      path: "/shop",
      element: (
        <>
          <Navbar cart={cart} />
          <Shop />
        </>
      ),
    },
    {
      path: "/shop/:id",
      element: (
        <>
          <Navbar />
          <AboutManga setCart={setCart} cart={cart} />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;

//{ path:"shop/:name", element:<Shop/>} render content dynamically from the component itself
//OR

//{path: "shop",element: ( <> <Shop /> <Manga /> </>),},
