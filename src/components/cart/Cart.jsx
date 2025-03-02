import CartItem from "../cartItem/CartItem";
import styles from "./cart.module.css";
import closeIcon from "../../assets/close.png";

function Cart({ cart, updateCart, showCart, cartOpen, itemList }) {
  function hideCart() {
    showCart(false);
  }

  return (
    <dialog open="open" className={styles.container}>
      <div className={styles.closeContainer}>
        <button className={styles.closeButton} onClick={hideCart}>
          <img className={styles.closeIcon} src={closeIcon} alt="" />
        </button>
      </div>
      <ul>
        {cart.map((item) => {
          return (
            <li key={item.id}>
              <CartItem itemProps={{id: item.id, number: item.number}} itemList={itemList} updateCart={updateCart}></CartItem>
            </li>
          );
        })}
      </ul>
    </dialog>
  );
}

export default Cart;
