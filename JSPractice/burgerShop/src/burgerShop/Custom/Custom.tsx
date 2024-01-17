import style from "./Custom.module.css";
import { useState } from "react";
import Bread from "./category/Bread";
import quantityShape from "./quantityShpae";
import Vegetables from "./category/Vegetables";
import Meat from "./category/Meat";
import Cheese from "./category/Cheese";

const Custom = () => {
  const [quantity, setQuantity] = useState<quantityShape>({
    plain: 0,
    sesame: 0,
    englishMuffin: 0,
    pretzel: 0,
    tomato: 0,
    spinach: 0,
    cabbage: 0,
    onions: 0,
    jalepeno: 0,
    leafLettuce: 0,
    mushroom: 0,
    cucumber: 0,
    chicken: 0,
    mutton: 0,
    bacon: 0,
    beef: 0,
    cheddar: 0,
    mozarella: 0,
    parmesan: 0,
    mayo: 0,
  });

  // function btnPress(event: string){
  //   opr === 'inc'
  // }
  return (
    <div className={style.Container}>
      <Bread quantity={quantity} />
      <Vegetables quantity={quantity} />
      <Meat quantity={quantity} />
      <Cheese quantity={quantity} />
    </div>
  );
};

export default Custom;
