import Card from "../Card";
import style from "../Custom.module.css";
import tomato from "../images/tomato.jpg";
import spinach from "../images/spinach.jpg";
import cabbage from "../images/cabbage.webp";
import onions from "../images/onions.jpg";
import jalepeno from "../images/jalapeno.jpg";
import leaf from "../images/leaf.jpg";
import mushroom from "../images/mushrooms.jpg";
import cucumber from "../images/cucumber.jpg";
import quantityShape from "../quantityShpae";

const Vegetables = ({ quantity }: { quantity: quantityShape }) => {
  return (
    <div className="mt-5">
      <h4>Vegetables: </h4>
      <div className={style.container}>
        <Card
          name="Tomato"
          price={10}
          image={tomato}
          quantity={quantity.tomato}
        />
        <Card
          name="Spinach"
          price={30}
          image={spinach}
          quantity={quantity.spinach}
        />
        <Card
          name="Cabbage"
          price={35}
          image={cabbage}
          quantity={quantity.cabbage}
        />
        <Card
          name="Onions"
          price={40}
          image={onions}
          quantity={quantity.onions}
        />
        <Card
          name="Jalapeno"
          price={10}
          image={jalepeno}
          quantity={quantity.jalepeno}
        />
        <Card
          name="Leaf Lettuce"
          price={30}
          image={leaf}
          quantity={quantity.leafLettuce}
        />
        <Card
          name="Mushroom"
          price={35}
          image={mushroom}
          quantity={quantity.mushroom}
        />
        <Card
          name="Cucumber"
          price={40}
          image={cucumber}
          quantity={quantity.cucumber}
        />
      </div>
    </div>
  );
};

export default Vegetables;
