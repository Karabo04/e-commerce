import React from 'react';

function OrderSummary({ items }) {
  return (
    <section id="order-summary">
      <h2>Order Summary</h2>
    <ul>
        {items.map((item, index) => (
        <li key={index}>{item.name} - ${item.price} (x{item.quantity})</li>
        ))}
    </ul>
    <p>Subtotal: $500</p>
    <p>Shipping: $20</p>
    <p>Total: $520</p>
    </section>
);
}

export default OrderSummary;
