import PropTypes from "prop-types";
import HomeItems from "../components/homeItems/HomeItems";
import Navbar from "../components/navbar/Navbar";

function Homepage({ itemList }) {
  return (
    <>
      <Navbar currentPage={"home"}></Navbar>
      <HomeItems items={itemList}></HomeItems>
    </>
  );
}

Homepage.propTypes = {
  itemList: PropTypes.array,
};

export default Homepage;
