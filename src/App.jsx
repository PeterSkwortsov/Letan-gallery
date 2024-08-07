import './App.css';
// import Collect from './components/Colect.jsx';
import { useState } from 'react';
import dataImg from './data/data';
import Collect from './components/Colect';
import scvor from './data/scvor';

const cats = [
        {name: 'Леонид Колосов'},
        {name: 'Татьяна Скворцова'}
    ]

function App() {

  const [searchValue, setSearchValue] = useState('')
  const [categoryId, setCategoryId] = useState(0)


  const [isPage, setPage] = useState(1);

  // let currentPageLeo = dataImg.collections.filter((obj) => obj.page)
  // console.log(currentPageLeo)
  
  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {cats.map((obj, index) => {
            return (
              <li
                className={categoryId === index ? "active" : ""}
                onClick={() => setCategoryId(index)}
                key={index}
              >
                {obj.name}
              </li>
            );
          })}
        </ul>
        <input
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          className="search-input"
          placeholder="Поиск по названию"
        />
      </div>
      <div className="content">
        {cats[categoryId].name === "Леонид Колосов" 
          ? dataImg.collections
              .filter((obj) =>
                obj.name.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((obj, index) => {
                return <Collect {...obj} key={index} />;
              })
          : scvor.collections
              .filter((obj) =>
                obj.name.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((obj, index) => {
                return <Collect {...obj} key={index} />;
              })}
      </div>

      <ul className="pagination">
        {[...Array(3)].map((_, index) => (
          <li
            key={index}
            onClick={() => setPage(index + 1)}
            className={isPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
