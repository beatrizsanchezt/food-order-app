import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Order you meal</h1>
        <button>Cart</button>
      </header>
      <div classname={classes["main-image"]}>
        <img src={mealsImage} alt="A table with food" />
      </div>
    </>
  );
};

export default Header;
