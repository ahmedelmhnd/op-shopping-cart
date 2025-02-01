import styles from "./app.module.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [itemsArray, setItemsArray] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  function showCart(status) {
    setCartOpen(status);
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
        setItemsArray(null);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  function updateCart(id, number) {
    const newCart = [];
    let exists = false;

    cart.forEach((e) => {
      if (e.id == id) {
        exists = true;
      }
      newCart.push({ id: e.id, number: e.number });
    });

    if (exists) {
      cart.forEach((e, index) => {
        if (e.id == id) {
          newCart[index] = { id: id, number: number };
        }
      });
    } else {
      newCart.push({ id: id, number: number });
    }

    setCart(newCart);
  }

  return (
    <div className={styles.main}>
      <Outlet context={{ itemsArray, loading, error, cart, updateCart, cartOpen, showCart}}></Outlet>
    </div>
  );
}

export default App;
