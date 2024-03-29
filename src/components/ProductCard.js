import { memo } from "react";
import AddToCart from "./AddToCart";

function ProductCard(props) {
  const { product } = props;
  const { cart } = props;
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <div className="product-title">{product.title}</div>
      </div>
      <div className="product-buy">
        <div className="product-price">${product.price}</div>
        <AddToCart product={product} cart={cart} />
      </div>
    </div>
  );
}

export default memo(ProductCard);
