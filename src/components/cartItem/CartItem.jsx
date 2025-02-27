import styles from "./cartItem.module.css";
import plus from "../../assets/plus.png"
import minus from "../../assets/minus.png"


function CartItem({ itemProps, itemList }) {
  function findItem() {
    for (let index = 0; index < itemList.length; index++) {
      if (itemList[index].id == itemProps.id) {
        return itemList[index];
      }
    }
  }
  const item = findItem();

  return (
    <>
      {item && (
        <div className={styles.item}>
          <img className={styles.image} src={item.image} alt="" />
          <p className={styles.description}>{item.title}</p>
          <div>
          <p className={styles.cost}>{"$ " + (item.price * itemProps.number)}</p>
          <div className={styles.quantity}>
            <button className={styles.minusButton}><img className={styles.minusIcon} src={minus} alt="" /></button>
            <p className={styles.description}>{itemProps.number}</p>
            <button className={styles.plusButton}><img className={styles.plusIcon} src={plus} alt="" /></button>
          </div>
          
          </div>

          
        </div>
      )}
    </>
  );
}

export default CartItem;
