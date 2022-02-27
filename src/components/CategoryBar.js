import { NavLink } from "react-router-dom";
import useApi from "../hooks/useApi";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function CategoryBar() {
  const { loadError, isLoading, data } = useApi(
    `https://fakestoreapi.com/products/categories`,
    []
  );

  const history = useNavigate();

  useEffect(() => {
    if (data.length > 0) {
      history("category/electronics");
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
              <NavLink
                key={categoryName}
                className={({ isActive }) =>
                  isActive ? "category-item selected" : "category-item"
                }
                to={`/category/${categoryName}`}
              >
                {categoryName}
              </NavLink>
            ))}
        </div>
      );
    }
  }

  return <div className="category-bar">{ui()}</div>;
}

export default CategoryBar;
