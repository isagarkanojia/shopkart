function AddToCart(props) {
  const { product, cart, addToCart, removeFromCart } = props;

  if (cart && cart.quantity > 0) {
    console.log(cart, "if");
    return (
      <div className="product-control">
        <button className="product-add">+</button>
        <div className="product-quantity">{cart.quantity}</div>
        <button className="product-add">-</button>
      </div>
    );
  } else {
    return (
      <button onClick={() => addToCart(product)} className="product-add">
        Add to cart
      </button>
    );
  }
}

export default AddToCart;
