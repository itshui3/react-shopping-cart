import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// Context
import { ShoppingContext } from '../contexts/ShoppingContext';
import { CartContext } from '../contexts/CartContext';

const Navigation = props => {
	const { cart } = useContext(CartContext);
	console.log(cart, "Navigation.js");
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
// receives cart through props from App.js
// done