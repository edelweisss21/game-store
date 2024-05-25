import React, { useState, useEffect, useContext } from 'react';
import cl from './styles/Cart.module.scss';
import CartCard from '../components/CartCard';
import Button from '../components/UI/Button';
import calculatePercentage from '../hooks/useCalculate';
import EmptyCart from '../components/EmptyCart';
import ArrowBack from '../components/UI/ArrowBack';
import { CartContext } from '../services/CartContext';

const Cart = () => {
	const [cartLocal, setCartLocal] = useState([]);
	const [gamesPrice, setGamesPrice] = useState(0);
	const [fee, setFee] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
	const [qty, setQty] = useState({});
	const { clearCart } = useContext(CartContext);

	useEffect(() => {
		const saved = localStorage.getItem('cart');
		if (saved) {
			const parsed = JSON.parse(saved);
			setCartLocal(parsed);

			const initialQty = {};
			parsed.forEach(game => {
				initialQty[game.id] = game.quantity || 1;
			});
			setQty(initialQty);
		}
	}, []);

	useEffect(() => {
		let newTotalPrice = 0;
		cartLocal.forEach(game => {
			const savedPrice = localStorage.getItem(`price_${game.id}`);
			if (savedPrice) {
				const parsedPrice = JSON.parse(savedPrice);
				const gameQty = qty[game.id] || 1;
				newTotalPrice += parsedPrice * gameQty;
			}
		});
		setGamesPrice(newTotalPrice);
		setFee(calculatePercentage(newTotalPrice, 5));
		setTotalPrice(newTotalPrice + calculatePercentage(newTotalPrice, 5));
	}, [cartLocal, qty]);

	const onRemoveCart = id => {
		setCartLocal(prev => prev.filter(item => item.id !== id));

		const updatedQty = { ...qty };
		delete updatedQty[id];
		setQty(updatedQty);
	};

	const handleQty = (gameId, newQty) => {
		const updatedQty = { ...qty };
		updatedQty[gameId] = newQty;
		setQty(updatedQty);
	};

	const removeAllGamesFromCart = () => {
		setCartLocal([]);
		clearCart();
	};

	return (
		<div className={cl.main}>
			<div className={cl.titleBox}>
				<ArrowBack />
				<h1 className={cl.title}>Cart</h1>
			</div>
			{cartLocal.length > 0 ? (
				<div className={cl.inner}>
					<ul className={cl.list}>
						{cartLocal.map(game => (
							<li className={cl.item} key={game.id}>
								<CartCard
									game={game}
									onRemoveCart={id => onRemoveCart(id)}
									price={
										localStorage.getItem(`price_${game.id}`)
											? JSON.parse(localStorage.getItem(`price_${game.id}`))
											: null
									}
									quantity={qty[game.id] || game.quantity || 1}
									handleQty={newQty => handleQty(game.id, newQty)}
								/>
							</li>
						))}
					</ul>
					<div className={cl.rightside}>
						<div className={cl.totalBox}>
							<p className={cl.gamesPrice}>
								The price of games: <span>{gamesPrice}$</span>
							</p>
							<p className={cl.totalFee}>
								Fee 5%: <span>{fee}$</span>
							</p>
							<h5 className={cl.totalTitle}>
								The final price:<span> {totalPrice}$</span>
							</h5>
							<Button to={`/game-store/payment`} className={cl.totalBtn}>
								Proceed to payment
							</Button>
						</div>
						<a
							onClick={removeAllGamesFromCart}
							className={cl.removeAllGamesBtn}
						>
							Remove all games
						</a>
					</div>
				</div>
			) : (
				<EmptyCart />
			)}
		</div>
	);
};

export default Cart;
