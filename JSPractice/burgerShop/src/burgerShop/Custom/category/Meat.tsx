import style from "../Custom.module.css";
import quantityShape from "../quantityShpae";
import beef from "../images/beef4.jpg";
import chicken from "../images/chicken.jpg";
import mutton from "../images/mutton.jpg";
import bacon from "../images/bacon.jpg";
import Card from "../Card";

const Meat = ({ quantity }: { quantity: quantityShape }) => {
  return (
    <div className="mt-5">
      <h4>Meat</h4>
      <div className={style.container}>
        <Card name="Beef" price={80} image={beef} quantity={quantity.beef} />
        <Card
          name="Chicken"
          price={70}
          image={chicken}
          quantity={quantity.chicken}
        />
        <Card
          name="Mutton"
          price={90}
          image={mutton}
          quantity={quantity.mutton}
        />
        <Card
          name="Bacon"
          price={100}
          image={bacon}
          quantity={quantity.bacon}
        />
      </div>
    </div>
  );
};

export default Meat;
