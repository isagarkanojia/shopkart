import CategoryBar from "./components/CategoryBar";
import ProductList from "./components/ProductList";
import "./App.scss";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState({});

  function addToCart(product) {
    const newCart = { ...cart };
    if (newCart[product.id]) {
      newCart[product.id].quantity += 1;
    } else {
      newCart[product.id] = {
        title: product.title,
        quantity: 1,
        price: product.price,
        id: product.id,
      };
    }

    setCart(newCart);
  }

  function removeFromCart(product) {
    const newCart = { ...cart };

    if (newCart[product.id] === false) {
      return;
    }

    if (newCart[product.id].quantity === 1) {
      delete newCart[product.id];
    } else {
      newCart[product.id].quantity -= 1;
    }

    setCart(newCart);
  }

  return (
    <div className="main">
      <CategoryBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {selectedCategory && (
        <ProductList
          category={selectedCategory}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;
