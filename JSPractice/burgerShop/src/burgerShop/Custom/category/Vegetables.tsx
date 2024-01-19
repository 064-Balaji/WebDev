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

interface Props {
  quantity: quantityShape;
  btnPress: (id: string, opr: string) => void;
}

const Vegetables = ({ quantity, btnPress }: Props) => {
  return (
    <div className="mt-5">
      <h4>Vegetables: </h4>
      <div className={style.container}>
        <Card
          id="tomato"
          name="Tomato"
          price={10}
          image={tomato}
          quantity={quantity.tomato}
          btnPress={btnPress}
        />
        <Card
          id="spinach"
          name="Spinach"
          price={30}
          image={spinach}
          quantity={quantity.spinach}
          btnPress={btnPress}
        />
        <Card
          id="cabbage"
          name="Cabbage"
          price={35}
          image={cabbage}
          quantity={quantity.cabbage}
          btnPress={btnPress}
        />
        <Card
          id="onions"
          name="Onions"
          price={40}
          image={onions}
          quantity={quantity.onions}
          btnPress={btnPress}
        />
        <Card
          id="jalepeno"
          name="Jalepeno"
          price={10}
          image={jalepeno}
          quantity={quantity.jalepeno}
          btnPress={btnPress}
        />
        <Card
          id="leafLettuce"
          name="Leaf Lettuce"
          price={30}
          image={leaf}
          quantity={quantity.leafLettuce}
          btnPress={btnPress}
        />
        <Card
          id="mushroom"
          name="Mushroom"
          price={35}
          image={mushroom}
          quantity={quantity.mushroom}
          btnPress={btnPress}
        />
        <Card
          id="cucumber"
          name="Cucumber"
          price={40}
          image={cucumber}
          quantity={quantity.cucumber}
          btnPress={btnPress}
        />
      </div>
    </div>
  );
};

export default Vegetables;
