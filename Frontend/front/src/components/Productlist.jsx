import React, {useState} from 'react';
import '../sd.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const products = [
    { id: 1, name: 'laptop', price: 14000 },
    { id: 2, name: 'Phone', price: 2500 },
    { id: 3, name: 'Speakers', price: 3680 },
    { id: 4, name: 'Headphones', price: 580 },
    { id: 5, name: 'Mouse', price: 120 },
    { id: 6, name: 'Keyboard', price: 730 },
];

function ProductList({ addToCart }) {
    return (
        <div className="product-list">
            <h2>Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <span>{product.name}</span>
                        <span>R{product.price}</span>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
