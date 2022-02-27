function AddToCart(props) {
  const { product, cart, addToCart, removeFromCart } = props;

  function add() {
    addToCart(product);
  }

  function remove() {
    removeFromCart(product);
  }

  if (cart && cart.quantity > 0) {
    return (
      <div className="product-control">
        <button onClick={remove} className="product-add">
          -
        </button>
        <div className="product-quantity">{cart.quantity}</div>
        <button onClick={add} className="product-add">
          +
        </button>
      </div>
    );
  } else {
    return (
      <button onClick={add} className="product-add">
        Add to cart
      </button>
    );
  }
}

export default AddToCart;
