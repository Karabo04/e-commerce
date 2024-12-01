import React from 'react';
import '../sd.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';


function Cart({ cartItems, removeFromCart }) {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        <span>{item.name}</span>
                        <span>${item.price}</span>
                        <button onClick={() => removeFromCart(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div className="total">
                Total: R{cartItems.reduce((total, item) => total + item.price, 0)}
                
            </div>
            <div className='Checkout'>
            <button ><Link to="/Shippinginfo">Checkout</Link></button>
            </div>
        </div>
    );
}

export default Cart;
