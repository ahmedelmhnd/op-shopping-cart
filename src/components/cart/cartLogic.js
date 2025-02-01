
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

export { updateCartLogic, showCartLogic };
