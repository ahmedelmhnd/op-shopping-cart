import styles from "./itemFullCard.module.css";
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";

function ItemFullCard({ item, quantity, updateCart, loading, error }) {
  function plusHandler() {
    updateCart(item.id, quantity + 1);
  }

  function minusHandler() {
    if (!(quantity == 0)) {
      updateCart(item.id, quantity - 1);
    }
  }

  return (
    <>
      {loading && <div className={styles.loading}>Loading ...</div>}
      {error && <div className={styles.error}>{error}</div>}
      {item && (
        <div className={styles.container}>
          <div className={styles.card}>
            <img className={styles.image} src={item.image} alt="" />
            <h1 className={styles.title}>{item.title}</h1>
            <h2 className={styles.price}> {"$ " + item.price}</h2>
            <p className={styles.description}>{item.description}</p>
          </div>

          <div className={styles.accessCart}>
            <div className={styles.quantity}>
              <button className={styles.minusButton} onClick={minusHandler}>
                <img className={styles.minusIcon} src={minus} alt="" />
              </button>
              <p className={styles.description}>{quantity}</p>
              <button className={styles.plusButton} onClick={plusHandler}>
                <img className={styles.plusIcon} src={plus} alt="" />
              </button>
            </div>

            <button className={styles.button}>add to cart</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemFullCard;
