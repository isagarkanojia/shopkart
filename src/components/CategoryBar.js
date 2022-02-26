import { useEffect, useState } from "react";

function CategoryBar(props) {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [loadError, setError] = useState(false);
  const { selectedCategory, setSelectedCategory } = props;

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setProducts(res);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  function ui() {
    if (isLoading) {
      return <div>Loading...</div>;
    } else if (loadError) {
      return <div>{loadError.message}</div>;
    } else {
      return (
        <div className="category-items">
          {!isLoading &&
            products.map((categoryName) => (
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
