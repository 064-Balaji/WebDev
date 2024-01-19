import style from "./Card.module.css";

interface Props {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity?: number;
  btnPress: (id: string, opr: string) => void;
}

const Card = ({ id, image, name, price, quantity, btnPress }: Props) => {
  return (
    <div className={style.container}>
      <img src={image} className={style.img} />
      <p className={style.name}>
        {name} - Rs.{price}/-
      </p>
      <div className={style.control}>
        <button className="btn btn-danger" onClick={(e) => btnPress(id, "dec")}>
          -
        </button>
        <label className="fs-5">{quantity}</label>
        <button
          className="btn btn-primary"
          onClick={(e) => btnPress(id, "inc")}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
