import React, { useState } from 'react';
import '../sd.css';
import { Link } from 'react-router-dom';
function ShippingInfo() {
const [form, setForm] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    country: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
};

return (
    <section id="shipping-info">
    <h2>Shipping Information</h2>
    <form>
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
        
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={form.address} onChange={handleChange} required />
        
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" value={form.city} onChange={handleChange} required />
        
        <label htmlFor="zip">Zip Code:</label>
        <input type="text" id="zip" name="zip" value={form.zip} onChange={handleChange} required />
        
        <label htmlFor="country">Country:</label>
        <input type="text" id="country" name="country" value={form.country} onChange={handleChange} required />
        <button ><Link to="/PaymentInfo">Continue</Link></button>
    </form>
    </section>
);
}

export default ShippingInfo;
