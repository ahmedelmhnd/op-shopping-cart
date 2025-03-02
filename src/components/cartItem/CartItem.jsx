import styles from "./cartItem.module.css";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";
import { findItem } from "../cart/cartLogic";

function CartItem({ itemProps, itemList, updateCart }) {


  const item = findItem(itemList, itemProps.id);

  function plusHandler() {
    updateCart(item.id, itemProps.number + 1);
  }

  function minusHandler() {
    if (!(itemProps.number == 1)) {
      updateCart(item.id, itemProps.number - 1);
    }
  }

  return (
    <>
      {item && (
        <div className={styles.item}>
          <img className={styles.image} src={item.image} alt="" />
          <p className={styles.description}>{item.title}</p>
          <div>
            <p className={styles.cost}>
              {"$ " + Math.round(itemProps.number * item.price * 100) / 100}
            </p>
            <div className={styles.quantity}>
              <button className={styles.minusButton} onClick={minusHandler}>
                <img className={styles.minusIcon} src={minus} alt="" />
              </button>
              <p className={styles.description}>{itemProps.number}</p>
              <button className={styles.plusButton} onClick={plusHandler}>
                <img className={styles.plusIcon} src={plus} alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartItem;
