import CategoryBar from "./components/CategoryBar";
import ProductList from "./components/ProductList";
import "./App.scss";
import { useCallback, useMemo, useState } from "react";
import CartStateContext from "./context/cartStateContext";
import CartActionsContext from "./context/cartActionsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

  const cartActionsContext = useMemo(() => {
    return {
      addToCart: addToCart,
      removeFromCart: removeFromCart,
    };
  }, [addToCart, removeFromCart]);

  return (
    <BrowserRouter>
      <CartStateContext.Provider value={cart}>
        <CartActionsContext.Provider value={cartActionsContext}>
          <div className="main">
            <CategoryBar />
            <Routes>
              <Route path="/category/:categoryId" element={<ProductList />} />
              <Route path="/" element={<ProductList />} />
            </Routes>
            {/* {selectedCategory && <ProductList category={selectedCategory} />} */}
          </div>
        </CartActionsContext.Provider>
      </CartStateContext.Provider>
    </BrowserRouter>
  );
}

export default App;
