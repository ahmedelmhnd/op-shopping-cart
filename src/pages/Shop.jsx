
import { useOutletContext } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

function Shop() {
    const { itemsArray, loading, error } = useOutletContext();
    console.log(itemsArray);

  return (
    <>
      <Navbar currentPage={"shop"}></Navbar>
      {loading && (<div>Loading ...</div>)}
      {error && (<div >{error}</div>)}
    </>
  );
}

export default Shop;
