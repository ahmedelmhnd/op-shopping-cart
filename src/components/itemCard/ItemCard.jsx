import PropTypes from "prop-types";
import styles from "./itemCard.module.css";
import { Link } from "react-router-dom";

function ItemCard({ item }) {
  return (
    <Link to={`/item/${item.id}`}>
      <div className={styles.card}>
        <img className={styles.image} src={item.image} alt="" />
        <h2 className={styles.title}>{item.title}</h2>
        <h3 className={styles.price}> {"$ " + item.price}</h3>
      </div>
    </Link>
  );
}

ItemCard.propTypes = {
  item: PropTypes.object,
};

export default ItemCard;
