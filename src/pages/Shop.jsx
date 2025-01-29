
import { useOutletContext } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

function Shop() {
    const {counter}  = useOutletContext();

  return (
    <>
      <Navbar currentPage={"shop"}></Navbar>
      {counter}
    </>
  );
}

export default Shop;
