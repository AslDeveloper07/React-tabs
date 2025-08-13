import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Miqdorni yangilash funksiyasi
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      // 0 bo'lsa savatdan o'chirish
      setCartItems(cartItems.filter(item => item.id !== productId));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  // Savatga qo'shish funksiyasi
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Savatdan o'chirish funksiyasi
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#020817]">
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route
            path="/"
            element={<Home addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
