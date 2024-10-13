
import x from "../images/x.svg";
import {motion} from 'framer-motion';
const Favourites = ({cart, removeFromCart}) => {

 

  if (cart.length === 0) {
    return (
      <>
        <h3
          style={{
            textAlign: "center",
            padding: "1rem",
            justifyContent: "center",
          }}
        >
          В избранном пока нет картин
        </h3>

        <div className="likes-wrapper"></div>
      </>
    );
  }

  return (
    <>
      <h3
        style={{
          textAlign: "center",
          padding: "1rem",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        Добавьте картины в избранное
      </h3>

      <div className="likes-wrapper">
        {cart.map((el) => (
          <div className="likes-images">
            <motion.img
              className="btn-x"
              src={x}
              onClick={() => removeFromCart(el)}
              alt={el.name}
              whileTap={{ scale: 0.95 }}
            ></motion.img>
            <motion.img
              src={el.image}
              alt={el.name}
              whileTap={{ scale: 0.95 }}
            />

            <h5>{el.author}</h5>
            <h4>{el.name}</h4>
            <p>{el.format}</p>
            <p>{el.size}</p>
          </div>
        ))}
      </div>
    </>
  );
};  


export default Favourites