const data = ["electronics", "jewelery", "men's clothing", "women's clothing"];

function CategoryBar() {
  return (
    <div className="category-bar">
      {data.map((categoryName) => (
        <div key={categoryName} className="category-item">
          {categoryName}
        </div>
      ))}
    </div>
  );
}

export default CategoryBar;
