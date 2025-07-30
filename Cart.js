import React from 'react';

function Cart({ cartItems, onRemoveItem, onCheckout }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mt-4">
      <h4 className="mb-3">Your Cart</h4>
      {cartItems.length === 0 ? (
        <div className="alert alert-info">Cart is empty</div>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{item.name} - <strong>${item.price}</strong></span>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onRemoveItem(index)}
                >
                  🗑 Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mb-2 text-end text-muted">Total: <strong>${total}</strong></div>
          <div className="d-grid">
            <button className="btn btn-success" onClick={onCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
