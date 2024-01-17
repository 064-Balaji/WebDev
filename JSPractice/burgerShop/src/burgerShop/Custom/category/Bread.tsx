import style from "../Custom.module.css";
import plain from "../images/wheat-bread.webp";
import sesame from "../images/sesame.jpg";
import englishMuffin from "../images/english-muffin.jpg";
import pretzel from "../images/pretzel.jpg";
import Card from "../Card";
import quantityShape from "../quantityShpae";

const Bread = ({ quantity }: { quantity: quantityShape }) => {
  return (
    <div>
      <h4>Breads: </h4>

      <div className={style.container}>
        <Card name="Plain" price={28} image={plain} quantity={quantity.plain} />
        <Card
          name="Sesame"
          price={30}
          image={sesame}
          quantity={quantity.sesame}
        />
        <Card
          name="English Muffin"
          price={35}
          image={englishMuffin}
          quantity={quantity.englishMuffin}
        />
        <Card
          name="Pretzel"
          price={40}
          image={pretzel}
          quantity={quantity.pretzel}
        />
      </div>
    </div>
  );
};

export default Bread;
