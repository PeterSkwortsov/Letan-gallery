import { Link } from "react-router-dom";
import scvor from "../data/scvor";
import Collect from "./Colect";
import { useState } from "react";

const Skvortsova = () => {

    const [searchValue, setSearchValue] = useState("");
    const [categoryId, setCategoryId] = useState(0);



    return (
      <>
        <h1>Картины Татьяны Скворцовой</h1>
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
          {scvor.collections
            .filter((obj) =>
              obj.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj, index) => {
              return <Collect {...obj} key={index} />;
            })}
        </div>
      </>
    );
}

export default Skvortsova