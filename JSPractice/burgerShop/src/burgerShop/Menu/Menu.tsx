import common from "../common.module.css";
import style from "./Menu.module.css";

const Menu = () => {
  return (
    <>
      <div className={common.container}>
        <h1 className={style.h1}>Menu</h1>
        <div className={style.contents}></div>
      </div>
    </>
  );
};

export default Menu;
