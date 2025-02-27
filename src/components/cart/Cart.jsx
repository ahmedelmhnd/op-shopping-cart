import CartItem from "../cartItem/CartItem";
import styles from "./cart.module.css";
import closeIcon from "../../assets/close.png"

function Cart({ cart, updateCart, showCart, cartOpen, itemList }) {
  function hideCart() {
    showCart(false);
  }

  return (
    <dialog open="open" className={styles.container}>
      <div className={styles.closeContainer}><button className={styles.closeButton} onClick={hideCart}><img className={styles.closeIcon} src={closeIcon} alt="" /></button></div>
      <CartItem itemProps={{id: 4, number: 2}} itemList={itemList}></CartItem>
      <CartItem itemProps={{id: 4, number: 2}} itemList={itemList}></CartItem>
      <CartItem itemProps={{id: 4, number: 2}} itemList={itemList}></CartItem>

    </dialog>
  );
}

export default Cart;
