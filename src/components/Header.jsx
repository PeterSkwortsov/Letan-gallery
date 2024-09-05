import { Link } from "react-router-dom";
import book from "../images/book.svg";
import { FcLikePlaceholder } from "react-icons/fc";
import { useState } from "react";
import Favourites from "./Favourites";

const Header = () => {

  let [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <div className="top">
        <div className="title-header">
          <Link to="/" className="title-main">
            <span>каталог картин</span>
            <br></br>
            <h1>ЛЕОНИДА КОЛОСОВА и ТАТЬЯНЫ СКВОРЦОВОЙ</h1>
          </Link>
        </div>
        <nav className="tags">
          <Link className="btn-main" to="/kolosov">
            Фантастические миры
          </Link>
          <Link className="btn-main" to="/skvortsova">
            Летние пейзажи
          </Link>
          <Link className="btn-main" to="/winter">
            Зимние пейзажи
          </Link>
          <Link className="btn-main" to="/flowers">
            Цветы и натюрморты
          </Link>
          <Link className="btn-main" to="/animals">
            Сказочные животные
          </Link>
          <Link className="btn-main" to="/blog">
            Художественные заметки{" "}
            {<img src={book} alt="book" className="book" />}
          </Link>
          <FcLikePlaceholder
            className={`shop-cart-button ${cartOpen && "active"}`}
            onClick={() => setCartOpen((cartOpen = !cartOpen))}
          />

          {cartOpen && <div className="shop-cart">
          <Favourites />
            
            </div>}


        </nav>
      </div>
    </>
  );
};

export default Header;
