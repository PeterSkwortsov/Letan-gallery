import canvas from "../images/blog-img/2.jpg";
import snow from "../images/blog-img/4.jpg";
import leto from "../images/blog-img/6.jpg";
import x from "../images/x.svg"

const Favourites = () => {



  return (
    <>
      <div className="likes-wrapper">
        <div className="likes-images">
          <img className="btn-x" src={x}></img>
          <img src={canvas} alt="Лукоморье" />
          <h4>Лукоморье</h4>
          <p>25х40</p>
          <p>Бумага, пастель</p>
          <p>Татьяна Скворцова</p>
        </div>
        <div className="likes-images">
          <img className="btn-x" src={x}></img>
          <img src={snow} alt="Лукоморье" />
          <h4>Лукоморье</h4>
          <p>25х40</p>
          <p>Бумага, пастель</p>
          <p>Татьяна Скворцова</p>
        </div>
        <div className="likes-images">
          <img className="btn-x" src={x}></img>
          <img src={canvas} alt="Лукоморье" />
          <h4>Лукоморье</h4>
          <p>25х40</p>
          <p>Бумага, пастель</p>
          <p>Татьяна Скворцова</p>
        </div>
        <div className="likes-images">
          <img className="btn-x" src={x}></img>
          <img src={leto} alt="Лукоморье" />
          <h4>Лукоморье</h4>
          <p>25х40</p>
          <p>Бумага, пастель</p>
          <p>Татьяна Скворцова</p>
        </div>
      </div>
    </>
  );
};  


export default Favourites