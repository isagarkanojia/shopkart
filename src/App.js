import CategoryBar from "./components/CategoryBar";
import ProductList from "./components/ProductList";
import "./App.scss";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="main">
      <CategoryBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
