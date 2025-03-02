import CartItem from "../cartItem/CartItem";
import styles from "./cart.module.css";
import closeIcon from "../../assets/close.png";
import { findTotal } from "./cartLogic";

function Cart({ cart, updateCart, showCart, cartOpen, itemList, emptyCart }) {
  

 
  function hideCart() {
    showCart(false);
  }



  const total = findTotal(cart, itemList);

  function checkOutHandler() {
    alert("Congratulations you're now $" + total + " poorer!");
    emptyCart();
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
              <CartItem
                itemProps={{ id: item.id, number: item.number }}
                itemList={itemList}
                updateCart={updateCart}
              ></CartItem>
            </li>
          );
        })}
      </ul>
      <p>{"Total: $" + total}</p>
      <button onClick={checkOutHandler}>Check out</button>
    </dialog>
  );
}

export default Cart;
