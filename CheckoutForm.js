import React, { useState } from 'react';

function CheckoutForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (name && email) {
      onSubmit();
      setName('');
      setEmail('');
    }
  };

  return (
    <form className="mt-4 border p-4 rounded bg-light" onSubmit={handleSubmit}>
      <h5 className="mb-3">Checkout Form</h5>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Confirm Order
        </button>
      </div>
    </form>
  );
}

export default CheckoutForm;
