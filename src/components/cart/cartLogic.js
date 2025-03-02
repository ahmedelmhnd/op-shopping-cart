function updateCartLogic(id, number, setCart, cart) {
  const newCart = [];
  let exists = false;

  cart.forEach((e) => {
    if (e.id == id) {
      exists = true;
    }
    newCart.push({ id: e.id, number: e.number });
  });

  if (exists) {
    cart.forEach((e, index) => {
      if (e.id == id) {
        newCart[index] = { id: id, number: number };
      }
    });
  } else {
    newCart.push({ id: id, number: number });
  }

  setCart(newCart);
}

function showCartLogic(status, setCartOpen) {
  setCartOpen(status);
}

function findItem(itemList, id) {
  for (let index = 0; index < itemList.length; index++) {
    if (itemList[index].id == id) {
      return itemList[index];
    }
  }
}

function findTotal(cart, itemList) {
  let total = 0;

  cart.forEach((e) => {
    const item = findItem(itemList, e.id);

    total = total + e.number * item.price;
  });

  return total;
}


export { updateCartLogic, showCartLogic, findItem, findTotal };
