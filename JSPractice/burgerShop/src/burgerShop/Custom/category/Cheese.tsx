import Card from "../Card";
import quantityShape from "../quantityShpae";
import style from "../Custom.module.css";
import cheddar from "../images/Cheddar.jpg";
import mozarella from "../images/mozarella.jpg";
import parmesan from "../images/parmesan.jpg";
import mayo from "../images/mayo.jpg";

const Cheese = ({ quantity }: { quantity: quantityShape }) => {
  return (
    <div className="mt-5">
      <h4>Vegetables: </h4>
      <div className={style.container}>
        <Card
          name="Cheddar"
          price={30}
          image={cheddar}
          quantity={quantity.cheddar}
        />
        <Card
          name="Mozarella"
          price={35}
          image={mozarella}
          quantity={quantity.mozarella}
        />
        <Card
          name="Parmesan"
          price={38}
          image={parmesan}
          quantity={quantity.parmesan}
        />
        <Card name="Mayo" price={20} image={mayo} quantity={quantity.mayo} />
      </div>
    </div>
  );
};

export default Cheese;
