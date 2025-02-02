import React, { useContext } from 'react';

// Components
import Item from './ShoppingCartItem';

// Contexts
import { CartContext } from '../contexts/CartContext';

const ShoppingCart = () => {
	const {cart} = useContext(CartContext);

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map((item, index) => (
				<Item key={item.id} index={index} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;

// Shopping Cart receives props containing a cart array
// Item component [ShoppingCartItem.js] given iterant data mapped from cart