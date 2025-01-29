import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [itemsArray, setItemsArray] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    };

    fetchItems();
  }, []);

  return (
    <div>
      <Outlet context={{ itemsArray, loading, error }}></Outlet>
    </div>
  );
}

export default App;
