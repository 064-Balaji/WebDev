import style from "../Custom.module.css";
import quantityShape from "../quantityShpae";
import beef from "../images/beef4.jpg";
import chicken from "../images/chicken.jpg";
import mutton from "../images/mutton.jpg";
import bacon from "../images/bacon.jpg";
import Card from "../Card";

interface Props {
  quantity: quantityShape;
  btnPress: (id: string, opr: string) => void;
}

const Meat = ({ quantity, btnPress }: Props) => {
  return (
    <div className="mt-5">
      <h4>Meat</h4>
      <div className={style.container}>
        <Card
          id="beef"
          name="Beef"
          price={80}
          image={beef}
          quantity={quantity.beef}
          btnPress={btnPress}
        />
        <Card
          id="chicken"
          name="Chicken"
          price={70}
          image={chicken}
          quantity={quantity.chicken}
          btnPress={btnPress}
        />
        <Card
          id="mutton"
          name="Mutton"
          price={90}
          image={mutton}
          quantity={quantity.mutton}
          btnPress={btnPress}
        />
        <Card
          id="bacon"
          name="Bacon"
          price={100}
          image={bacon}
          quantity={quantity.bacon}
          btnPress={btnPress}
        />
      </div>
    </div>
  );
};

export default Meat;
