import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import Shop from "./Shop.jsx";
import Navbar from "./Navbar.jsx";
import AboutManga from "./AboutManga.jsx";
import Manga from "./Manga.jsx";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />,
          <Home />,
        </>
      ),
    },
    {
      path: "/shop",
      element: (
        <>
          <Navbar />,
          <Shop />,
        </>
      ),
    },
    {
      path: "/shop/:id",
      element: (
        <>
          <Navbar />
          <AboutManga />
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
