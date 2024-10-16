import { lazy, Suspense } from "react";
import "./App.css";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { useState, useEffect } from "react";
import GridLoader from "react-spinners/GridLoader";

const Biography = lazy(() => import("./components/Bio/Biography"));
const Kolosov = lazy(() => import("./components/Kolosov"));
const WinterCollect = lazy(() => import("./components/WinterCollect"));
const TownHistory = lazy(() => import("./components/Town-history"));
const Footer = lazy(() => import("./components/Footer"));
const Blog = lazy(() => import("./components/Blog"));
const Animals = lazy(() => import("./components/Animals"));
const Flowers = lazy(() => import("./components/Flowers"));
const Skvortsova = lazy(() => import("./components/Skvortsova"));

const initialCart = JSON.parse(localStorage.getItem("cart") || "[]");

function App() {
  const [cart, setCart] = useState(initialCart);

  const addToCart = (item) => {
    if (cart.find((el) => el.name === item.name)) return;
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i.name !== item.name));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]); // добавляет в хранилище но сбрасывает при обновлении

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense
                  fallback={
                    <GridLoader
                      color="#79d9cc"
                      style={{
                        margin: "0 auto",
                        display: "flex",
                        padding: "30px",
                      }}
                      size={50}
                    />
                  }
                >
                  <MainLayout cart={cart} removeFromCart={removeFromCart} />
                </Suspense>
              }
            >
              <Route
                path="/"
                element={
                  <Suspense
                    fallback={
                      <GridLoader
                        color="#79d9cc"
                        style={{
                          margin: "0 auto",
                          display: "flex",
                          padding: "20px",
                        }}
                        size={50}
                      />
                    }
                  >
                    <Biography />
                  </Suspense>
                }
              />

              <Route
                path="kolosov"
                element={<Kolosov cart={cart} addToCart={addToCart} />}
              />
              <Route
                path="kolosov/:path"
                element={<Kolosov cart={cart} addToCart={addToCart} />}
              />
              <Route
                path="skvortsova"
                element={<Skvortsova cart={cart} addToCart={addToCart} />}
              />
              <Route
                path="skvortsova/:path"
                element={<Skvortsova cart={cart} addToCart={addToCart} />}
              />
              <Route
                path="skvortsova"
                element={<Skvortsova cart={cart} addToCart={addToCart} />}
              />
              <Route
                path="flowers"
                element={<Flowers cart={cart} addToCart={addToCart} />}
              />
              <Route
                path="flowers/:path"
                element={<Flowers cart={cart} addToCart={addToCart} />}
              />
              <Route
                path="animals"
                element={<Animals cart={cart} addToCart={addToCart} />}
              />
              <Route
                path="animals/:path"
                element={<Animals cart={cart} addToCart={addToCart} />}
              />
              <Route
                path="winter"
                element={<WinterCollect cart={cart} addToCart={addToCart} />}
              />
              <Route
                path="winter/:path"
                element={<WinterCollect cart={cart} addToCart={addToCart} />}
              />
              <Route
                path="town"
                element={<TownHistory cart={cart} addToCart={addToCart} />}
              />
              <Route
                path="town/:path"
                element={<TownHistory cart={cart} addToCart={addToCart} />}
              />
              <Route path="blog" element={<Blog />} />
              <Route path="*" element={<h6>Такой страницы нет</h6>} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
