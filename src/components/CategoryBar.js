import { useEffect } from "react";
import useApi from "../hooks/useApi";
import Loader from "./Loader";

function CategoryBar(props) {
  const { selectedCategory, setSelectedCategory } = props;
  const { loadError, isLoading, data } = useApi(
    `https://fakestoreapi.com/products/categories`,
    []
  );

  useEffect(() => {
    if (data.length > 0) {
      setSelectedCategory(data[0]);
    }
  }, []);

  function ui() {
    if (isLoading) {
      return <Loader />;
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
