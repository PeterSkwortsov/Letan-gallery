import "./App.css";
import { useState } from "react";
import Kolosov from "./components/Kolosov";
import Skvortsova from "./components/Skvortsova";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import CustomModal from "./components/CustomModal/CustomModal";
import MainLayout from "./layouts/MainLayout";
import dataImg from "./data/data";
import Collect from "./components/Colect";
import Biography from "./components/Bio/Biography";

function App() {
  // const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Biography />} />
              <Route path="kolosov" element={<Kolosov />} />
              <Route path="skvortsova" element={<Skvortsova />} />

              <Route path="*" element={<h6>Такой страницы нет</h6>} />
            </Route>
          </Routes>
          
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
