import React from 'react';
import '../sd.css';
import { Link } from 'react-router-dom';
function ReviewOrder({ items }) {
return (
    <section id="review-order">
<h2>Review Your Order</h2>
    <p>Please review your order details and make any necessary changes before submitting.</p>
    <button type="button"><Link to="/Cart">Edit Order</Link></button>&nbsp;
    <button type="submit" ><Link to="/ConfirmationMessage">Place Order</Link></button>
    </section>
);
}

export default ReviewOrder;
