import canvas from "../images/blog-img/2.jpg";

const Favourites = () => {
    return (
      <>
        <div className="wrapper">
          <div className="wrapper-images">
            <img src={canvas} alt="Лукоморье" />
            <h4>Лукоморье</h4>
            <p>25х40</p>
            <p>Бумага, пастель</p>
            <p>Татьяна Скворцова</p>

            <button style={{ position: "absolute", top: "10px", right: "10px" }}>X</button>
          </div>
        </div>
      </>
    );
};  


export default Favourites