import style from "./Custom.module.css";
import { useEffect, useState } from "react";
import Bread from "./category/Bread";
import quantityShape from "./quantityShpae";
import Vegetables from "./category/Vegetables";
import Meat from "./category/Meat";
import Cheese from "./category/Cheese";
import Total from "./Total";
import { useLocation } from "react-router-dom";

const Custom = () => {
  const id = useLocation();

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

  const price: quantityShape = {
    plain: 28,
    sesame: 30,
    englishMuffin: 35,
    pretzel: 40,
    tomato: 10,
    spinach: 8,
    cabbage: 12,
    onions: 15,
    jalepeno: 23,
    leafLettuce: 18,
    mushroom: 16,
    cucumber: 8,
    chicken: 70,
    mutton: 90,
    bacon: 100,
    beef: 80,
    cheddar: 30,
    mozarella: 35,
    parmesan: 38,
    mayo: 20,
  };

  const [bill, setBill] = useState<
    Array<{
      name: string;
      count: number;
      price: number;
      total: number;
      final: number;
    }>
  >([]);

  function btnPress(id: string, opr: string) {
    setQuantity((prevQuantity) => {
      const updatedQuantity = { ...prevQuantity };

      if (opr === "inc") {
        updatedQuantity[id as keyof quantityShape]++;
      } else if (
        opr === "dec" &&
        updatedQuantity[id as keyof quantityShape] > 0
      ) {
        updatedQuantity[id as keyof quantityShape]--;
      }

      return updatedQuantity;
    });
  }

  useEffect(() => {
    const updatedBill = [];
    let total = 0;
    let final1 = 0;

    for (let key in quantity) {
      if (quantity[key as keyof quantityShape] !== 0) {
        total =
          quantity[key as keyof quantityShape] *
          price[key as keyof quantityShape];

        final1 += total;

        updatedBill.push({
          name: key,
          count: quantity[key as keyof quantityShape],
          price: price[key as keyof quantityShape],
          total: total,
          final: final1,
        });
      }
    }

    setBill(updatedBill);
  }, [quantity]);

  useEffect(() => {
    //created for manage the request from menu
    if (id.state) {
      switch (id.state.name) {
        case "Cheese Burger":
          setQuantity({
            ...quantity,
            sesame: 1,
            tomato: 1,
            cabbage: 1,
            onions: 1,
            cucumber: 1,
            cheddar: 1,
            mayo: 1,
          });
          break;

        case "Veggie Burger":
          setQuantity({
            ...quantity,
            plain: 1,
            spinach: 1,
            tomato: 1,
            cabbage: 1,
            onions: 1,
            jalepeno: 1,
            leafLettuce: 1,
            cucumber: 1,
            parmesan: 1,
            mayo: 1,
          });
          break;

        case "Beef Burger":
          setQuantity({
            ...quantity,
            sesame: 1,
            tomato: 1,
            onions: 1,
            leafLettuce: 1,
            beef: 1,
            cheddar: 1,
            mayo: 1,
          });
          break;

        case "Chicken Burger":
          setQuantity({
            ...quantity,
            sesame: 1,
            tomato: 1,
            cabbage: 1,
            leafLettuce: 1,
            chicken: 1,
            mozarella: 1,
            cheddar: 1,
            mayo: 1,
          });
          break;

        case "Mushroom Burger":
          setQuantity({
            ...quantity,
            sesame: 1,
            tomato: 1,
            cabbage: 1,
            onions: 1,
            leafLettuce: 1,
            mushroom: 1,
            cheddar: 1,
            mayo: 1,
          });
          break;
      }
    }
  }, []);
  return (
    <div className={style.Container}>
      <Bread quantity={quantity} btnPress={btnPress} />
      <Vegetables quantity={quantity} btnPress={btnPress} />
      <Meat quantity={quantity} btnPress={btnPress} />
      <Cheese quantity={quantity} btnPress={btnPress} />
      <Total bill={bill} />
    </div>
  );
};

export default Custom;
