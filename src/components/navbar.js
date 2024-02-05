import React from 'react';
import { Link } from 'react-router-dom'; // if using React Router for navigation
import "../styles/navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/orders" className="nav-link">Orders</Link>
                </li>
                <li className="nav-item">
                    <Link to="/purchases" className="nav-link">Purchases</Link>
                </li>
                <li className="nav-item">
                    <Link to="/suppliers" className="nav-link">Suppliers</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
