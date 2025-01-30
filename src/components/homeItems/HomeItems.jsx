import PropTypes from "prop-types";
import styles from "./homeItems.module.css";
import ItemCard from "../itemCard/ItemCard";

function HomeItems({ items, loading, error }) {
  console.log(items);
  return (
    <>
      {loading && <div className={styles.loading}>Loading ...</div>}
      {error && <div className={styles.error}>{error}</div>}
      {items && (
        <div className={styles.container}>
          <ItemCard item={items[0]}></ItemCard>
          <ItemCard item={items[1]}></ItemCard>
          <ItemCard item={items[2]}></ItemCard>
          <ItemCard item={items[3]}></ItemCard>
        </div>
      )}
    </>
  );
}

HomeItems.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default HomeItems;
