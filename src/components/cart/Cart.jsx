import styles from "./cart.module.css"

function Cart({cart, updateCart, showCart, cartOpen}) {

    function hideCart(){
        showCart(false)
    }

    return(
        
        <dialog open="open" className={styles.container}>
            <button onClick={hideCart}>close</button>
        </dialog>
    )
}

export default Cart;