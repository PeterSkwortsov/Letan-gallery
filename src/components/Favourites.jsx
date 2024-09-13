
import x from "../images/x.svg"

const Favourites = ({cart, removeFromCart}) => {



  return (
    <>
      <div className="likes-wrapper">
        {cart.map((el) => (
          <div className="likes-images">
            <img
              className="btn-x"
              src={x}
              onClick={() => removeFromCart(el)}
            ></img>
            <img src={el.image} alt="Лукоморье" />
            <h4>{el.name}</h4>
            <p>{el.size}</p>
            <p>{el.format}</p>
            <p>{el.author}</p>
          </div>
        ))}
      </div>
    </>
  );
};  


export default Favourites