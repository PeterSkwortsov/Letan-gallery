import './App.css';
import { useState } from 'react';
import Kolosov from './components/Kolosov';
import Skvortsova from './components/Skvortsova';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import CustomModal from './components/CustomModal/CustomModal';
import MainLayout from './layouts/MainLayout';
import dataImg from './data/data';
import Collect from './components/Colect';

function App() {

  const [modalPrize, setModalPrize] = useState(false);
      const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<CustomModal />} />
              <Route path="kolosov" element={<Kolosov />} />
              <Route path="skvortsova" element={<Skvortsova />} />
              <Route path="*" element={<h6>Такой страницы нет</h6>} />
            </Route>
          </Routes>

          <button
            className="modal-show-button"
            onClick={() => setModalPrize(true)}
          >
            {dataImg.collections
              
              .map((obj, index) => {
                return <Collect {...obj} key={index} />;
              })}
          </button>

          <CustomModal 
          isOpen={modalPrize} 
          onClose={() => setModalPrize(false)}>

               <img src={dataImg.collections.map((obj, index) => { return obj.image })} alt='sdg' />;
             
            
          </CustomModal>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App
