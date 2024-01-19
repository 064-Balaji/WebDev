import { useNavigate } from "react-router-dom";
import style from "../Custom/Card.module.css";

interface Props {
  image: string;
  name: string;
}

const Card = ({ image, name }: Props) => {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <img src={image} className={style.img} />
      <button
        onClick={() => {
          navigate("/custom", { state: { name: name } });
        }}
        className="btn btn-success"
      >
        {name}
      </button>
    </div>
  );
};

export default Card;
