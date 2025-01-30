import PropTypes from "prop-types";
import styles from "./itemCard.module.css"

function ItemCard({item}) {
    
return <div className={styles.card}>
    <img className={styles.image} src={item.image} alt="" />
    <h2 className={styles.title}>{item.title}</h2>
    <h3 className={styles.price}> {"$ " +item.price}</h3>
</div>;
}

ItemCard.propTypes = {
    item: PropTypes.object,
}

export default ItemCard;