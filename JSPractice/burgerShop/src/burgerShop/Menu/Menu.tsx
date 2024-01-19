import common from "../common.module.css";
import Card from "./Card";
import cheese from "../Custom/images/cheeseBurger.jpeg";
import veg from "../Custom/images/veg-burger.webp";
import beef from "../Custom/images/beef-burger.jpg";
import chicken from "../Custom/images/chicken-burger.jpg";
import mushroom from "../Custom/images/mushroom-swiss.jpg";
import style from "../Custom/Custom.module.css";

const Menu = () => {
  return (
    <>
      <div className={common.container}>
        <h1 className="text-center mb-3">Menu</h1>
        <div className={style.container}>
          <Card name="Cheese Burger" image={cheese} />
          <Card name="Veggie Burger" image={veg} />
          <Card name="Beef Burger" image={beef} />
          <Card name="Chicken Burger" image={chicken} />
          <Card name="Mushroom Burger" image={mushroom} />
        </div>
      </div>
    </>
  );
};

export default Menu;
