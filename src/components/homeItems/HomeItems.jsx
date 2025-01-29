import PropTypes from "prop-types";
import styles from "./homeItems.module.css";

function HomeItems({ items, loading, error }) {
  console.log(items);
  return (
    <>
      <div className={styles.test}> home </div>
      {loading ? <>loading...</> : <></>}
      {error ? <>{error}</> : <></>}
    </>
  );
}

HomeItems.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string
};

export default HomeItems;
