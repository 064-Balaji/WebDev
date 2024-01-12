import styles from "./header.module.css";
import logo from "./Images/header/youtube-logo.svg";
import burger from "./Images/header/hamburger-menu.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <img src={burger} className={styles.burger} />
        <img src={logo} className={styles.logo} />
      </div>
      <div className={styles.middleSection}>Middle</div>
      <div className={styles.rightSection}>right</div>
    </div>
  );
};

export default Header;
