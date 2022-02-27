import useApi from "../hooks/useApi";
import Loader from "./Loader";
import ProductCard from "./ProductCard";

function ProductList(props) {
  const { category } = props;
  const { cart, addToCart, removeFromCart } = props;
  const { loadError, isLoading, data } = useApi(
    `https://fakestoreapi.com/products/category/${category}`,
    []
  );

  function ui() {
    if (isLoading) {
      return <Loader />;
    } else if (loadError) {
      return <div>Failed to load products</div>;
    } else if (data.length) {
      return (
        <div className="product-list">
          {data.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cart={cart[product.id]}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      );
    } else {
      return <div>No Products in this category</div>;
    }
  }

  return ui();
}

export default ProductList;
