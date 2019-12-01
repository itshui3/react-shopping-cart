import React, { useState, Component } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Context
import { ShoppingContext } from './contexts/ShoppingContext';
import { AddItemContext } from './contexts/AddItemContext';

import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

class App extends Component {
	constructor() {
		super()
		this.state = {
			products: data,
			cart: []
		}
	}
	// const [products] = useState(data);
	// const [cart, setCart] = useState([]);

	addItem = item => {
		// add the given item to the cart
		this.setState({ cart: [
			...this.state.cart,
			item
		] })
	};

	render() {
		return (
			<div className="App">
				<CartContext.Provider value={this.state.cart}>

					<Navigation />
		
					{/* Routes */}

					<ProductContext.Provider value={{products: this.state.products, addItem: this.addItem}}>
						<Route
							exact
							path="/"
							component={Products}
						/>
					</ProductContext.Provider>


					<Route
						path="/cart"
						component={ShoppingCart}
					/>

				</CartContext.Provider>
				

			</div>
		);

	}


}

export default App;
// need to pass products, cart, and addItem to individual components being rendered from App.js
// however I only know how to : 
// <ShoppingContext.Provider state={cart}><ShoppingCart></ShoppingContext>
// setting up Provider with one state, but not the rest