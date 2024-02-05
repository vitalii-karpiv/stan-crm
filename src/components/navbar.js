import React from 'react';
import { Link } from 'react-router-dom'; // if using React Router for navigation
import "../styles/navbar.css"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
