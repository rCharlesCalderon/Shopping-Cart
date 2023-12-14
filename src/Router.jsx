import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import Shop from "./Shop.jsx";
import Manga from "./Manga.jsx";
function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "shop",
      element: <Shop />,
      children: [{ path: "manga", element: <Manga /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
