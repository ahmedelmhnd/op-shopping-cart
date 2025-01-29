import PropTypes from "prop-types";
import styles from "./homeItems.module.css"


function HomeItems({items}) {
    console.log(items);
    return (
        <div className={styles.test}> home </div>
    );
}

HomeItems.propTypes = {
    items: PropTypes.array,
}

export default HomeItems;