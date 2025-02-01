import PropTypes from "prop-types";
import HomeItems from "../components/homeItems/HomeItems";
import Navbar from "../components/navbar/Navbar";
import { useOutletContext } from "react-router-dom";
import HomeAdvert from "../components/homeAdvert/HomeAdvert";
import Footer from "../components/footer/Footer";

function Homepage() {
  const { itemsArray, loading, error, cart, updateCart, cartOpen, showCart } = useOutletContext();


  return (
    <>
      <Navbar currentPage={"home"} showCart={showCart}></Navbar>
      <HomeAdvert></HomeAdvert>
      <HomeItems items={itemsArray} loading={loading} error={error}></HomeItems>
      <Footer></Footer>
    </>
  );
}

Homepage.propTypes = {
  itemList: PropTypes.array,
};

export default Homepage;
