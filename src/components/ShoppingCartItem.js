import React from 'react';
import { CartContext } from '../contexts/CartContext'

const Item = props => {
	const { removeItem } = React.useContext(CartContext)

	console.log(removeItem)

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => removeItem(props.index)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;

// receives information about iterant shopping cart item from props