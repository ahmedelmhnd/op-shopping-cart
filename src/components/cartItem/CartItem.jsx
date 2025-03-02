import styles from "./cartItem.module.css";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";

function CartItem({ itemProps, itemList, updateCart}) {
  function findItem() {
    for (let index = 0; index < itemList.length; index++) {
      if (itemList[index].id == itemProps.id) {
        return itemList[index];
      }
    }
  }

  const item = findItem();

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
              {"$ " + item.price * itemProps.number}
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
