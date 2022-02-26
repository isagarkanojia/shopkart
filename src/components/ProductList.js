import useApi from "../hooks/useApi";

function ProductList(props) {
  const { category } = props;
  const { loadError, isLoading, data } = useApi(
    `https://fakestoreapi.com/products/category/${category}`,
    []
  );

  function ui() {
    if (isLoading) {
      return <div>Loading...</div>;
    } else if (loadError) {
      return <div>Failed to load products</div>;
    } else if (data.length) {
      return <div className="product-list">Products: {data.length}</div>;
    } else {
      return <div>No Products in this category</div>;
    }
  }

  return ui();
}

export default ProductList;
