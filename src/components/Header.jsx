import { Link } from "react-router-dom";

// const titles = [
//   "Фантастические миры",
//   "Летние пейзажи",
//   "Зимние пейзажи",
//   "Натюрморты",
// ]


const Header = () => {



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
            Художественные заметки
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
