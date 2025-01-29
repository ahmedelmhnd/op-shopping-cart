
import { useOutletContext } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

function Shop() {
    const { itemsArray, loading, error } = useOutletContext();
    console.log(itemsArray);

  return (
    <>
      <Navbar currentPage={"shop"}></Navbar>
      {loading ? <>loading...</> : <></>}
      {error ? <>{error}</> : <></>}
    </>
  );
}

export default Shop;
