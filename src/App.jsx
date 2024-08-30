import "./App.css";
import Kolosov from "./components/Kolosov";
import Skvortsova from "./components/Skvortsova";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Footer from "./components/Footer";
import Biography from "./components/Bio/Biography";
import WinterCollect from "./components/WinterCollect";
import Flowers from "./components/Flowers";
import Animals from "./components/Animals";
import Blog from "./components/Blog";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Biography />} />
              <Route path="kolosov" element={<Kolosov />} />
              <Route path="skvortsova" element={<Skvortsova />} />
              <Route path="flowers" element={<Flowers />} />
              <Route path="animals" element={<Animals />} />
              <Route path="winter" element={<WinterCollect />} />
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
