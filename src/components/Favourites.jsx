
import x from "../images/x.svg";

const Favourites = ({cart, removeFromCart}) => {



  return (
    <>
      <h3
        style={{
          textAlign: "center",
          padding: "1rem",
          justifyContent: "center",
        }}
      >
        Добавьте картины в избранное
      </h3>

      <div className="likes-wrapper">
        {cart.map((el) => (
          <div className="likes-images">
            <img
              className="btn-x"
              src={x}
              onClick={() => removeFromCart(el)}
              alt={el.name}
            ></img>
            <img src={el.image} alt={el.name} />
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