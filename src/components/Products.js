import React, { useContext } from 'react';

// Components
import Product from './Product';

// Contexts
import { ShoppingContext } from '../contexts/ShoppingContext';

const Products = () => {
	const { products } = useContext(ShoppingContext);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default Products;
// receives product array && addItem handler through props from App.js
// passes individual product data down to Product.js to form iterants