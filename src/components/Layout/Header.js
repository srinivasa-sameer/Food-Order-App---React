import { Fragment } from "react";
import styles from "./Header.module.css";
import foodImage from "../assets/food.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Food Order</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={foodImage} alt="A table of food" />
      </div>
    </Fragment>
  );
};

export default Header;
