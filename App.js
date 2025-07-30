import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import products from './data/products';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const addToCart = product => setCart([...cart, product]);

  const removeFromCart = index => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  const handleCheckout = () => setShowCheckout(true);

  const handleConfirmOrder = () => {
    setOrderConfirmed(true);
    setCart([]);
    setShowCheckout(false);
    setTimeout(() => setOrderConfirmed(false), 4000); // hide after 4s
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4"> Simple E-Commerce Store</h2>

      <ProductList products={products} onAddToCart={addToCart} />

      <Cart cartItems={cart} onRemoveItem={removeFromCart} onCheckout={handleCheckout} />

      {showCheckout && <CheckoutForm onSubmit={handleConfirmOrder} />}

      {orderConfirmed && (
        <div className="alert alert-success mt-3 text-center">
          Your order has been confirmed!
        </div>
      )}
    </div>
  );
}

export default App;
