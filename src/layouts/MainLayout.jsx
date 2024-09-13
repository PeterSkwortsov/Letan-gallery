import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const MainLayout = ({cart, removeFromCart}) => {

  return (
    <>
      <Header cart={cart} removeFromCart={removeFromCart} />
      <Outlet />
    </>
  );
};

export default MainLayout;
