import CartItem from "../cartItem/CartItem";
import styles from "./cart.module.css";

function Cart({ cart, updateCart, showCart, cartOpen, itemList }) {
  function hideCart() {
    showCart(false);
  }

  return (
    <dialog open="open" className={styles.container}>
      <button onClick={hideCart}>close</button>
      <CartItem itemProps={{id: 4, number: 2}} itemList={itemList}></CartItem>
    </dialog>
  );
}

export default Cart;
