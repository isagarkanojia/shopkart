import { useContext } from "react";
import CartActionsContext from "../context/cartActionsContext";

function AddToCart(props) {
  console.log(`AddToCart Rendered`, props.product.title);

  const { product, cart } = props;

  const { addToCart, removeFromCart } = useContext(CartActionsContext);

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
