import "./App.css";
import Kolosov from "./components/Kolosov";
import Skvortsova from "./components/Skvortsova";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Biography from "./components/Bio/Biography";
import WinterCollect from "./components/WinterCollect";

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
              <Route path="winter" element={<WinterCollect />} />

              <Route path="*" element={<h6>Такой страницы нет</h6>} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
