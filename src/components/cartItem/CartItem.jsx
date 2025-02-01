import styles from "./cartItem.module.css";

function CartItem({ itemProps, itemList }) {
  function findItem() {
    for (let index = 0; index < itemList.length; index++) {
      if (itemList[index].id == itemProps.id) {
        return itemList[index];
      }
    }
  }
  const item = findItem();

  return (
    <div>
      <img src={item.image} alt="" />
    </div>
  );
}

export default CartItem;
