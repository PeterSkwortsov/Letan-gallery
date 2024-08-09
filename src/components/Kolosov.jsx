import dataImg from "../data/data"
import Collect from "./Colect"
import { Link } from "react-router-dom";
import { useState } from "react";



const Kolosov = () => {
  const [searchValue, setSearchValue] = useState("");
  const [categoryId, setCategoryId] = useState(0);

  return (
    <>
      <h1>Фантастические миры Леонида Колосова</h1>
      <Link to="/" className="btn-main">
        Назад
      </Link>

      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className="search-input"
        placeholder="Поиск по названию"
      />

      <div className="content">
        {dataImg.collections
          .filter((obj) =>
            obj.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((obj, index) => {
            return <Collect {...obj} key={index} />;
          })}
      </div>
    </>
  );
};

export default Kolosov


// dataImg.collections.map((obj, index) => {
//   <Collect {...obj} key={index} />;
// });