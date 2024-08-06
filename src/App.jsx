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
          ? dataImg.collections.map((obj, index) => {
              return (
                // eslint-disable-next-line jsx-a11y/alt-text
                <Collect image={obj.image} key={index} name={obj.name} />
              );
            }): scvor.collections.map((obj, index) => {
              return (
                // eslint-disable-next-line jsx-a11y/alt-text
                <Collect image={obj.image} key={index} name={obj.name} />
              );
            })}
      </div>
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App
