import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart);

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
            <h2>Redux Store</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/cart" style={{ marginLeft: '20px' }}>Cart ({cartItems.length})</Link>
            </div>
        </nav>
    );
};

export default Navbar;
