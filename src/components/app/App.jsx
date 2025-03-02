import styles from "./app.module.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { showCartLogic, updateCartLogic } from "../cart/cartLogic";

function App() {
  const [itemsArray, setItemsArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);


  function updateCart(id, number) {
    updateCartLogic(id, number, setCart, cart)
  }

  function showCart(status) {
    showCartLogic(status, setCartOpen)
  }

  function emptyCart() {
    setCart([]);
  }

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
        setItemsArray(json);
      } catch (err) {
        setError(err.message);
        setItemsArray([]);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);



  return (
    <div className={styles.main}>
      <Outlet context={{ itemsArray, loading, error, cart, updateCart, cartOpen, showCart, emptyCart}}></Outlet>
    </div>
  );
}

export default App;
