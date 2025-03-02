import PropTypes from "prop-types";
import styles from "./shopItems.module.css";
import ItemCard from "../itemCard/ItemCard";

function ShopItems({ items, loading, error }) {


  return (
    <>
      {loading && <div className={styles.loading}>Loading ...</div>}
      {error && <div className={styles.error}>{error}</div>}
      {items && (
        <ul className={styles.container}>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <ItemCard item={item}></ItemCard>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

ShopItems.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default ShopItems;