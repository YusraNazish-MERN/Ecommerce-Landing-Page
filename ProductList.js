import React from 'react';

function ProductList({ products, onAddToCart }) {
  return (
    <div className="mb-4">
      <h4 className="mb-3">🛍 Products</h4>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card h-100 p-3 border border-primary-subtle">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text text-muted">Price: <strong>${product.price}</strong></p>
              <button
                className="btn btn-outline-primary mt-auto"
                onClick={() => onAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
