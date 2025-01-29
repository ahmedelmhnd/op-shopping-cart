import PropTypes from "prop-types";
import HomeItems from "../components/homeItems/HomeItems";
import Navbar from "../components/navbar/Navbar";
import { useOutletContext } from "react-router-dom";

function Homepage({ itemList }) {

    const {counter, setCounter} = useOutletContext();
    function count() {
        setCounter(counter + 1);
    }



  return (
    <>
      <Navbar currentPage={"home"}></Navbar>
      <HomeItems items={itemList}></HomeItems>
      {counter}
      <button onClick={count}>fdsfew</button>
    </>
  );
}

Homepage.propTypes = {
  itemList: PropTypes.array,
};

export default Homepage;
