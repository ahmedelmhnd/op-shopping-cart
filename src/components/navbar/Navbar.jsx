import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import cartIcon from "../../assets/shopping-cart.png";

function Navbar({ currentPage, showCart }) {
  return (
    <div className={styles.nav}>
      <Link to="/">
        <h1>Shopppyy</h1>
      </Link>

      <nav>
        {currentPage == "home" ? (
          <Link className={styles.active + " " + styles.link} to="/">
            Home
          </Link>
        ) : (
          <Link className={styles.link} to="/">
            Home
          </Link>
        )}
        {currentPage == "shop" ? (
          <Link className={styles.active + " " + styles.link} to="/shop">
            Shop
          </Link>
        ) : (
          <Link className={styles.link} to="/shop">
            Shop
          </Link>
        )}

        <img className={styles.cart} src={cartIcon} onClick={showCart} alt="" />
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default Navbar;
