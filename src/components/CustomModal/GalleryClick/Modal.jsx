import xIcon from "../../../images/x.png"; 
import Img from "../..//Img.jsx";
import { useNavigate, useLocation } from "react-router-dom";
const Modal = ({ clickImg, setClickImg }) => { 
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickImg(null);
    }

     const parentPath = location.pathname.substring(
       0,
       location.pathname.lastIndexOf("/")
     );

     // Выполняем редирект на родительский путь
     navigate(parentPath);
  }; 

  return (
    <>
      (
      <div className="overlay dismiss" onClick={handleClick}>
        <Img src={clickImg} alt="Большое изображение" />
      </div>
      )
    </>
  );
};

export default Modal;
