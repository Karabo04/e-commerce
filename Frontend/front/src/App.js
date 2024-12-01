import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes } from "react-router-dom";
import './sd.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Cart from'./components/Cart';

import About from './components/About';
import Contact from './components/Contacts';
import ProductList from './components/Productlist';
import SearchBar from './components/SearchBar';
import Registration from "./pages/Registration";
import Login from "./pages/Login";

import ProtectedRoute from "./Routes/ProtectedRoute";
import OrderSummary from './components/OrderSummary'; 
import ShippingInfo from './components/ShippingInfo'; 
import PaymentInfo from './components/PaymentInfo'; 
import ReviewOrder from './components/ReviewOrder'; 
import ConfirmationMessage from './components/ConfirmationMessage';
import EmailSubmitted from './components/EmailSubmitted';

function App() {


  const [cartItems, setCartItems] = useState([]);
  const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
      };
  return (
    <div className='Nav-bar'>
    <Nav/>

    <Routes>
    <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/register/" element={<Registration />} />
    <Route path="/login/" element={<Login />} />
    <Route path="/Productlist" element={<ProductList addToCart={addToCart} />}/>
    <Route path="/ShippingInfo" element={<ShippingInfo />} />
    <Route path="/PaymentInfo" element={<PaymentInfo />} />
    <Route path="/OrderSummary" element={<OrderSummary />} />
    <Route path="/ReviewOrder" element={<ReviewOrder />} />
    <Route path="/ConfirmationMessage" element={<ConfirmationMessage />} />
    <Route path="/Cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}/>
    <Route path="/ShippingInfo" element={<ShippingInfo />} />
    <Route path="/SearchBar" element={<SearchBar data={data} />}/>
    <Route path="/EmailSubmitted" element={<EmailSubmitted />} />
    </Routes>
    
    <footer class="footer">
  <div class="footer-content">
    <p>&copy; 2024 Karabo's Tech-Shop. All rights reserved.</p>
    <p>Contact us: <a href="mailto:contact@karabostechshop.com">contact@karabostechshop.com</a></p>
    <p>Follow us: 
      <a href="#">Facebook</a> | 
      <a href="#">Twitter</a> | 
      <a href="#">Instagram</a>
    </p>
  </div>
</footer>

    
    </div>
  
  );
}

export default App;
