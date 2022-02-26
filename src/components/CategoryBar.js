import useApi from "../hooks/useApi";

function CategoryBar(props) {
  const { selectedCategory, setSelectedCategory } = props;
  const { loadError, isLoading, data } = useApi(
    `https://fakestoreapi.com/products/categories`,
    []
  );

  function ui() {
    if (isLoading) {
      return <div>Loading...</div>;
    } else if (loadError) {
      return <div>{loadError.message}</div>;
    } else {
      return (
        <div className="category-items">
          {!isLoading &&
            data.map((categoryName) => (
              <div
                key={categoryName}
                className={
                  "category-item" +
                  (selectedCategory === categoryName ? " selected" : "")
                }
                onClick={() => setSelectedCategory(categoryName)}
              >
                {categoryName}
              </div>
            ))}
        </div>
      );
    }
  }

  return <div className="category-bar">{ui()}</div>;
}

export default CategoryBar;
