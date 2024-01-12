import { ReactNode } from "react";
import logo from "./img/fossil.jpg";
import styles from "./Card.module.css";

interface Props {
  title: String;
  description: String;
  rating: ReactNode;
  price: ReactNode;
}

const Card = ({ title, description, rating, price }: Props) => {
  return (
    <div className={styles.container}>
      <img src={logo} />
      <div className={`${styles.container} ${styles.info}`}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <p>{rating}</p>
        <h2>{price}</h2>
      </div>
    </div>
  );
};

export default Card;
