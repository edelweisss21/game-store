import React, { useState, useEffect, useContext } from 'react';
import cl from './styles/CartCard.module.scss';
import { Link } from 'react-router-dom';
import { CartContext } from '../services/CartContext';
import Slider from 'react-slick';

const CartCard = props => {
	const { removeFromCart } = useContext(CartContext);
	const handleRemoveFromCart = () => {
		removeFromCart(props.game.id);
		props.onRemoveCart(props.game.id);
	};

	return (
		<div className={cl.card}>
			<Link
				className={cl.linkBox}
				to={`/game-store/${props.game.id}?page=${props.page}`}
			>
				<img className={cl.img} src={props.game.background_image} alt='game' />
				<h5 className={cl.heading}>{props.game.name}</h5>
			</Link>
			<div className={cl.priceBox}>
				<p className={cl.price}>{props.price}$</p>
				<input
					className={cl.inputPrice}
					onChange={e => {
						const newQty = parseInt(e.target.value, 10);
						if (newQty > 0 && newQty <= 100) {
							props.handleQty(newQty);
						}
					}}
					value={props.quantity}
					type='number'
					min='1'
					max='100'
				/>
				<div onClick={handleRemoveFromCart} className={cl.removeBtn}>
					<img className={cl.removeImg} src='./add.svg' alt='add' />
				</div>
			</div>
		</div>
	);
};

export default CartCard;
