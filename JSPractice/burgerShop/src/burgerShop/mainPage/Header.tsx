import logo from "./images/burgerLogo.png";
import style from "./Header.module.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);

  const changeBack = () => {
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);
  };
  window.addEventListener("scroll", changeBack);
  return (
    <div className={navbar ? style.active : style.container}>
      <div className={style.leftSection}>
        <img src={logo} className={style.logo} />
        <p style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          Home
        </p>
        <p style={{ cursor: "pointer" }} onClick={() => navigate("menu")}>
          Menu
        </p>
      </div>
      <div className={style.rightSection}>
        <FaRegCircleUser size={25} />
        <p>Sign in</p>
        <IoFastFood size={30} className={style.cart} />
      </div>
    </div>
  );
};

export default Header;
