import dataImg from "../data/data";
import Collect from "./Colect";
import { Link } from "react-router-dom";
import { useState } from "react";
import CustomModal from "./CustomModal/CustomModal";

const Kolosov = () => {
  const [searchValue, setSearchValue] = useState("");
  const [modalPrize, setModalPrize] = useState(false);

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

      <button className="modal-show-button" onClick={() => setModalPrize(true)}>
        <div className="content">
          {dataImg.collections
            .filter((obj) =>
              obj.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj, index) => {
              return <Collect {...obj} key={index} />;
            })}
        </div>
      </button>

      <CustomModal isOpen={modalPrize} onClose={() => setModalPrize(false)}>
      </CustomModal>
    </>
  );
};

export default Kolosov;

