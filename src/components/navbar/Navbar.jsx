import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({currentPage}) {
  return (
    <div className={styles.nav}>
      <h1>shopppyy</h1>
      <nav>
        {currentPage == "home" ? <Link className={styles.active + " " + styles.link} to="/">Home</Link> : <Link className={styles.link} to="/">Home</Link> }
        {currentPage == "shop" ? <Link className={styles.active + " " + styles.link} to="/shop">Shop</Link> : <Link className={styles.link} to="/shop">Shop</Link> }
      </nav>
    </div>
  );
}

export default Navbar;
