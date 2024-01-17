import style from "./Card.module.css";

interface Props {
  image: string;
  name: string;
  price: number;
  quantity?: number;
  // btnPress: (opr: string) => void;
}

const Card = ({ image, name, price, quantity }: Props) => {
  return (
    <div className={style.container}>
      <img src={image} className={style.img} />
      <p className={style.name}>
        {name} - Rs.{price}/-
      </p>
      <div className={style.control}>
        <button className="btn btn-danger" onClick={(e) => console.log(e)}>
          -
        </button>
        <label>{quantity}</label>
        <button className="btn btn-primary" onClick={(e) => console.log(e)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
