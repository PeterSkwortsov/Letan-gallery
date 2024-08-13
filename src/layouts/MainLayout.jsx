import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import CustomModal from "../components/CustomModal/CustomModal";
import { useState } from "react";
import Biography from "../components/Bio/Biography";
const MainLayout = () => {
  const [modalPrize, setModalPrize] = useState(false);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
