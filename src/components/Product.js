import React, { useContext } from 'react';

// Context
import { AddItemContext } from '../contexts/AddItemContext';

const Product = props => {
	const addItem = useContext(AddItemContext);
	return (
		<div className="product">
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>

			<button onClick={() => addItem(props.product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
// receives product data through props and displays it
// receives addItem and sets it up as an onClick handler

// one way I could make this work with contextAPI is :
// iterate with a key that is used to access my ContextObject's array item
// and get data needed by this Product component's current iteration