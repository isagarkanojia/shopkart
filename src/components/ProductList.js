import { useContext } from "react";
import { useParams } from "react-router-dom";
import CartStateContext from "../context/cartStateContext";
import useApi from "../hooks/useApi";
import Loader from "./Loader";
import ProductCard from "./ProductCard";

function ProductList() {
  const { categoryId } = useParams();

  const { loadError, isLoading, data } = useApi(
    `https://fakestoreapi.com/products/category/${categoryId}`,
    []
  );

  const cart = useContext(CartStateContext);

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
