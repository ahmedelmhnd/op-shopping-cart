import PropTypes from "prop-types";
import styles from "./homeItems.module.css";
import ItemCard from "../itemCard/ItemCard";

function HomeItems({ items, loading, error }) {
  const displayItems = items.slice(0, 4);

  return (
    <>
      {loading && <div className={styles.loading}>Loading ...</div>}
      {error && <div className={styles.error}>{error}</div>}
      {items && (
        <ul className={styles.container}>
          {displayItems.map((item) => {
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

HomeItems.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default HomeItems;
