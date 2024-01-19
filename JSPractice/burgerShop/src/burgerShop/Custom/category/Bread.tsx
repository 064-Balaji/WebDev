import style from "../Custom.module.css";
import plain from "../images/wheat-bread.webp";
import sesame from "../images/sesame.jpg";
import englishMuffin from "../images/english-muffin.jpg";
import pretzel from "../images/pretzel.jpg";
import Card from "../Card";
import quantityShape from "../quantityShpae";

interface Props {
  quantity: quantityShape;
  btnPress: (id: string, opr: string) => void;
}

const Bread = ({ quantity, btnPress }: Props) => {
  return (
    <div>
      <h4>Breads: </h4>

      <div className={style.container}>
        <Card
          id="plain"
          name="Plain"
          price={28}
          image={plain}
          quantity={quantity.plain}
          btnPress={btnPress}
        />
        <Card
          id="sesame"
          name="Sesame"
          price={30}
          image={sesame}
          quantity={quantity.sesame}
          btnPress={btnPress}
        />
        <Card
          id="englishMuffin"
          name="English Muffin"
          price={35}
          image={englishMuffin}
          quantity={quantity.englishMuffin}
          btnPress={btnPress}
        />
        <Card
          id="pretzel"
          name="Pretzel"
          price={40}
          image={pretzel}
          quantity={quantity.pretzel}
          btnPress={btnPress}
        />
      </div>
    </div>
  );
};

export default Bread;
