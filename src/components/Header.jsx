import { Link } from "react-router-dom";
import book from "../images/book.svg";
import { FcLikePlaceholder } from "react-icons/fc";
import { useState } from "react";
import Favourites from "./Favourites";
import xClose from "../images/x.svg";
import xCloseCircle from "../images/circle-x.svg";
const Header = ({cart, removeFromCart}) => {

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
          
          <span
            style={{
              color: "black",
              marginLeft: "-10px",
              borderRadius: "50%",
              padding: "5px 9px",
              border: "1px solid black",
            }}
          >
            {cart.length}
          </span>

          {cartOpen && (
            <div className="shop-cart">
              <Favourites cart={cart} removeFromCart={removeFromCart} />
              <img
                src={xCloseCircle}
                className="btnCircleX"
                onClick={() => setCartOpen(false)}
                alt="Закрыть окно"
              />
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;
