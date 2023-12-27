import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Shop from "./Shop.jsx";
import Navbar from "./Navbar.jsx";
import AboutManga from "./AboutManga.jsx";
import { useState } from "react";

function AppRouter() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home cart={cart} setCart={setCart} />
            </>
          }
        />
        <Route
          path="/shop"
          element={
            <>
              <Navbar cart={cart} setCart={setCart} />
              <Shop />
            </>
          }
        />
        <Route
          path="/shop/:id"
          element={
            <>
              <Navbar cart={cart} setCart={setCart} />
              <AboutManga setCart={setCart} cart={cart} />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
