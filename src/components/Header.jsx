import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import App from "../App.css";




const Header = () => {



  return (
    <>
      <div className="top">
        <h1>
          каталог картин<br></br> ЛЕОНИДА КОЛОСОВА и ТАТЬЯНЫ СКВОРЦОВОЙ
        </h1>
        <nav className="tags">
          
            <Link className="btn-main" to="/kolosov">Фантастические миры</Link>
            <Link className="btn-main" to="/skvortsova">Летние пейзажи</Link>
            <Link className="btn-main" to="/kolosov">Зимние пейзажи</Link>
            <Link className="btn-main" to="/kolosov">Натюрморты</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
