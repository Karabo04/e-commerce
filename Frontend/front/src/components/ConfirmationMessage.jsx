import React from 'react';
import { Link } from 'react-router-dom';
function ConfirmationMessage() {
return (
    <section id="confirmation-message">
<h2>Order Confirmation</h2>
    <p>Thank you for your purchase! Your order number is #12345. You will receive a confirmation email shortly.</p>
    <Link to="/Productlist">Continue shopping</Link>
    </section>
);
}

export default ConfirmationMessage;
