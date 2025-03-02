import PropTypes from "prop-types";
import Navbar from "../../components/navbar/Navbar";
import { useOutletContext } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Cart from "../../components/cart/Cart";
import { useParams } from "react-router-dom";
import ItemFullCard from "../../components/itemFullCard/ItemFullCard";

function ItemPage() {
  const { itemsArray, loading, error, cart, updateCart, cartOpen, showCart } =
    useOutletContext();

  const { ID } = useParams();

  function findItem(id) {
    let result = null;
    itemsArray.forEach((e) => {
      if (e.id == id) {
        result = e;
      }
    });
    return result;
  }
  const item = findItem(ID);

  let quantity = 0;

  cart.forEach((e) => {
    if (e.id == ID) {
      quantity = e.number;
    }
  });

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
      <Navbar currentPage="item" showCart={showCart}></Navbar>
      <ItemFullCard
        item={item}
        quantity={quantity}
        updateCart={updateCart}
        loading={loading}
        error={error}
      ></ItemFullCard>
      <Footer></Footer>
    </>
  );
}

ItemPage.propTypes = {
  itemList: PropTypes.array,
};

export default ItemPage;
