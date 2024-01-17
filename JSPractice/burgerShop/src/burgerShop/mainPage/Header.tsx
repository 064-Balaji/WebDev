import logo from "./images/burgerLogo.png";
import style from "./Header.module.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBack = () => {
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);
  };
  window.addEventListener("scroll", changeBack);
  return (
    <div className={navbar ? style.active : style.container}>
      <div className={style.leftSection}>
        <img src={logo} className={style.logo} />
        <p className="mb-0">Menu</p>
        <p className="mb-0">Deals</p>
      </div>
      <div className={style.rightSection}>
        <FaRegCircleUser size={25} />
        <p className="mb-0">Sign in</p>
        <IoFastFood size={30} className={style.cart} />
      </div>
    </div>
  );
};

export default Header;
