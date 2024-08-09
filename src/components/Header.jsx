import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import App from "../App.css";




const Header = () => {



  return (
    <>
      <div className="top">
       
        <h1>каталог картин<br></br> ЛЕОНИДА КОЛОСОВА и ТАТЬЯНЫ СКВОРЦОВОЙ</h1>
        <nav className="tags">
          <li className="btn-main">
            <Link to="/kolosov">Фантастические миры</Link>
          </li>
          <li>
            <Link to="/skvortsova">Летние пейзажи</Link>
          </li>
          <li>
            <Link to="/kolosov">Зимние пейзажи</Link>
          </li>
          <li>
            <Link to="/kolosov">Натюрморты</Link>
          </li>
        </nav>
      </div>
    </>
  );
};

export default Header;
