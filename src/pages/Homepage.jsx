import PropTypes from "prop-types";
import HomeItems from "../components/homeItems/HomeItems";
import Navbar from "../components/navbar/Navbar";
import { useOutletContext } from "react-router-dom";

function Homepage() {
  const { itemsArray, loading, error } = useOutletContext();

  return (
    <>
      <Navbar currentPage={"home"}></Navbar>
      <HomeItems items={itemsArray} loading={loading} error={error}></HomeItems>
    </>
  );
}

Homepage.propTypes = {
  itemList: PropTypes.array,
};

export default Homepage;
