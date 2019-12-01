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
		setCart([
			...cart,
			item
		])
	};

	render() {
		return (
			<div className="App">
				<Navigation cart={cart} />
	
				{/* Routes */}
				<AddItemContext.Provider value={this.addItem}>
					<Route
						exact
						path="/"
						render={() => (
							<Products
								products={products}
							/>
						)}
					/>
				</AddItemContext.Provider>

	
				<Route
					path="/cart"
					render={() => <ShoppingCart cart={cart} />}
				/>
			</div>
		);

	}


}

export default App;
// need to pass products, cart, and addItem to individual components being rendered from App.js
// however I only know how to : 
// <ShoppingContext.Provider state={cart}><ShoppingCart></ShoppingContext>
// setting up Provider with one state, but not the rest