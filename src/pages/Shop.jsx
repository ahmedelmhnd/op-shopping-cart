
import { useOutletContext } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function Shop() {
    const { itemsArray, loading, error } = useOutletContext();
    console.log(itemsArray);

  return (
    <>
      <Navbar currentPage={"shop"}></Navbar>
      {loading && (<div>Loading ...</div>)}
      {error && (<div >{error}</div>)}
      <Footer></Footer>
    </>
  );
}

export default Shop;
