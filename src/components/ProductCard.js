function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <div className="product-title">{product.title}</div>
      </div>
    </div>
  );
}

export default ProductCard;
