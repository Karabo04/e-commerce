import React from 'react';
import '../sd.css';
import { MdHome, MdShoppingCart, MdSearch, MdContactMail,MdCategory, MdInfo } from 'react-icons/md';
import logo from '../images/Karabos.png';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
            <img src={logo} alt='' width={40}/>
                <a href="/Home">KarabosTech-Shop</a>
            </div>
            <ul className="navbar-links">
                <li><Link to="/"><MdHome /></Link></li>
                <li><Link to="./About"><MdInfo/>r</Link></li>
                <li><Link to="./Contact"><MdContactMail/></Link></li>
                <li> <Link to="./Productlist"><MdCategory/></Link></li>
                <li> <Link to="./Cart"><MdShoppingCart /></Link></li>
                <li><Link to="./SearchBar"><MdSearch/></Link></li>
        

            </ul>
        </nav>
    );
}

export default Nav;
