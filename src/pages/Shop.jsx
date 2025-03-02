import { useOutletContext } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Cart from "../components/cart/Cart";
import ShopItems from "../components/shopItems/ShopItems";
import styles from "./shop.module.css"

function Shop() {
  const { itemsArray, loading, error, cart, updateCart, cartOpen, showCart } =
    useOutletContext();

  return (
    <>
      {cartOpen && (
        <Cart
          cart={cart}
          updateCart={updateCart}
          showCart={showCart}
          cartOpen={cartOpen}
          itemList={itemsArray}
        ></Cart>
      )}
      <Navbar currentPage={"shop"} showCart={showCart}></Navbar>
      <ShopItems items={itemsArray} loading={loading} error={error}></ShopItems>
      <Footer></Footer>
    </>
  );
}

export default Shop;
