import CategoryBar from "./components/CategoryBar";
import ProductList from "./components/ProductList";
import "./App.scss";
import { useCallback, useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState({});

  const addToCart = useCallback((product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[product.id]) {
        const newItem = { ...newCart[product.id] };
        newItem.quantity += 1;
        newCart[product.id] = newItem;
      } else {
        newCart[product.id] = {
          title: product.title,
          quantity: 1,
          price: product.price,
          id: product.id,
        };
      }
      return newCart;
    });
  }, []);

  const removeFromCart = useCallback((product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[product.id] === false) {
        return;
      }

      if (newCart[product.id].quantity === 1) {
        delete newCart[product.id];
      } else {
        const newItem = { ...newCart[product.id] };
        newItem.quantity -= 1;
        newCart[product.id] = newItem;
      }

      return newCart;
    });
  }, []);

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
