import { Link } from "react-router-dom";
import book from "../images/book.svg";
import { FcLikePlaceholder } from "react-icons/fc";
import { useState, useEffect } from "react";
import Favourites from "./Favourites";
import xClose from "../images/x.svg";
import xCloseCircle from "../images/circle-x.svg";
import Menu from "../images/menu.svg";
import Ryba from "../images/blog-img/fon/ryba.jpg";
import Ded from "../images/blog-img/fon/10.jpg";
import Reka from "../images/blog-img/fon/12.jpg";
import Hram from "../images/blog-img/fon/IMG_8062.jpg";
import Cvet from "../images/blog-img/fon/cvet.jpg";
import Street from "../images/blog-img/fon/Dvorik.jpg";
import Sneg from "../images/blog-img/fon/Snegovik.jpg";
import Sovet from "../images/blog-img/fon/sovetam.jpg";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const Header = ({ cart, removeFromCart }) => {
  let [cartOpen, setCartOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  // console.log(location);

  const section = location.pathname.split("/").filter(Boolean)?.[0];

  let image = Ryba;

  // kolosov, skvortsova, flowers, animals, winter, town, blog
  switch (section) {
    case "kolosov":
      image = Ded;
      break;
    case "winter":
      image = Reka;
      break;
    case "town":
      image = Street;
      break;
    case "animals":
      image = Sneg;
      break;
    case "skvortsova":
      image = Hram;
      break;
    case "flowers":
      image = Cvet;
      break;
    case "blog":
      image = Sovet;
      break;
    default:
      image = Ryba;
  }

  return (
    <>
      <div className="top">
        <div className="title-header">
          <Link to="/" className="title-main">
            <motion.span whileTap={{ scale: 0.95 }}>каталог картин</motion.span>
            <br></br>
            <motion.h1 whileTap={{ scale: 0.95 }}>
              ЛЕОНИДА КОЛОСОВА и ТАТЬЯНЫ СКВОРЦОВОЙ
            </motion.h1>
          </Link>
        </div>
        <nav
          className={`header_nav ${isOpen ? "active" : ""}`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            marginBottom: "1rem",
            zIndex: "2",
          }}
        >
          <ul className="header_nav-list">
            <Link className="header_nav-item" to="/kolosov">
              Фантастические миры
            </Link>
            <Link className="header_nav-item" to="/skvortsova">
              Летние пейзажи
            </Link>
            <Link className="header_nav-item" to="/winter">
              Зимние пейзажи
            </Link>
            <Link className="header_nav-item" to="/flowers">
              Цветы и натюрморты
            </Link>
            <Link className="header_nav-item" to="/animals">
              Сказочные животные
            </Link>
            <Link className="header_nav-item" to="/town">
              Городские сюжеты
            </Link>
            <Link className="header_nav-item" to="/blog">
              Художественные заметки
            </Link>
          </ul>

          <motion.div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-1rem",
              padding: "1rem",
            }}
            whileTap={{ scale: 0.95 }}
          >
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
                backgroundColor: "aliceblue",
              }}
            >
              {cart.length}
            </span>
          </motion.div>

          {cartOpen && (
            <div className="shop-cart">
              <Favourites cart={cart} removeFromCart={removeFromCart} />
              <motion.img
                src={xCloseCircle}
                className="btnCircleX"
                onClick={() => setCartOpen(false)}
                alt="Закрыть окно"

                whileTap={{ scale: 0.95 }}
              />
            </div>
          )}
        </nav>
        <button
          className="header_menu-button"
          style={{ border: "none", top: "0.5rem", right: "0.5rem" }}
          onClick={() => setOpen(!isOpen)}
        >
          {" "}
          {isOpen ? (
            <img src={xClose} alt="close"/>
          ) : (
            <img src={Menu} alt="menu" style={{ width: "30px" }} />
          )}
        </button>
      </div>
    </>
  );
};

export default Header;
