import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
		const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
		if (storedCart) setCart(storedCart);
		if (storedFavorites) setFavorites(storedFavorites);
	}, []);

	const addToCart = game => {
		setCart(prev => {
			const existingGameIndex = prev.findIndex(item => item.id === game.id);
			if (existingGameIndex !== -1) {
				const updatedCart = [...prev];
				updatedCart[existingGameIndex].quantity++;
				return updatedCart;
			}
			return [...prev, { ...game, quantity: 1 }];
		});
	};

	const removeFromCart = gameId => {
		setCart(prev => prev.filter(game => game.id !== gameId));
	};

	const addToFavorites = item => {
		setFavorites(prev => [...prev, item]);
	};

	const removeFromFavorites = id => {
		setFavorites(prev => prev.filter(item => item.id !== id));
	};

	const isInCart = gameId => {
		return cart.some(item => item.id === gameId);
	};

	const isInFavorites = gameId => {
		return favorites.some(item => item.id === gameId);
	};

	const toggleCart = game => {
		if (isInCart(game.id)) {
			removeFromCart(game.id);
		} else {
			addToCart(game);
			setShowModal(true);
		}
	};

	const toggleFavorites = game => {
		if (isInFavorites(game.id)) {
			removeFromFavorites(game.id);
		} else {
			addToFavorites(game);
		}
	};

	const clearCart = () => {
		setCart([]);
	};

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
		localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [cart, favorites]);

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				addToFavorites,
				removeFromCart,
				removeFromFavorites,
				toggleCart,
				toggleFavorites,
				isInCart,
				isInFavorites,
				showModal,
				setShowModal,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
