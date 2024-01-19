import Card from "../Card";
import quantityShape from "../quantityShpae";
import style from "../Custom.module.css";
import cheddar from "../images/Cheddar.jpg";
import mozarella from "../images/mozarella.jpg";
import parmesan from "../images/parmesan.jpg";
import mayo from "../images/mayo.jpg";

interface Props {
  quantity: quantityShape;
  btnPress: (id: string, opr: string) => void;
}

const Cheese = ({ quantity, btnPress }: Props) => {
  return (
    <div className="mt-5">
      <h4>Vegetables: </h4>
      <div className={style.container}>
        <Card
          id="cheddar"
          name="Cheddar"
          price={30}
          image={cheddar}
          quantity={quantity.cheddar}
          btnPress={btnPress}
        />
        <Card
          id="mozarella"
          name="Mozarella"
          price={35}
          image={mozarella}
          quantity={quantity.mozarella}
          btnPress={btnPress}
        />
        <Card
          id="parmesan"
          name="Parmesan"
          price={38}
          image={parmesan}
          quantity={quantity.parmesan}
          btnPress={btnPress}
        />
        <Card
          id="mayo"
          name="Mayo"
          price={20}
          image={mayo}
          quantity={quantity.mayo}
          btnPress={btnPress}
        />
      </div>
    </div>
  );
};

export default Cheese;
