import React, { useState } from 'react';
import '../sd.css';
import { Link } from 'react-router-dom';
function PaymentInfo() {
const [form, setForm] = useState({
    cardNumber: '',
    expiryDate: '',
    cvc: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
};

return (
    <section id="payment-info">
    <h2>Payment Information</h2>
    <form>
        <label htmlFor="card-number">Card Number:</label>
        <input type="text" id="card-number" name="cardNumber" value={form.cardNumber} onChange={handleChange} required />
        
        <label htmlFor="expiry-date">Expiry Date:</label>
        <input type="text" id="expiry-date" name="expiryDate" value={form.expiryDate} onChange={handleChange} required />
        
        <label htmlFor="cvc">CVC:</label>
        <input type="text" id="cvc" name="cvc" value={form.cvc} onChange={handleChange} required />
        <button ><Link to="/ReviewOrder">Pay</Link></button>
    </form>
    </section>
);
}

export default PaymentInfo;
