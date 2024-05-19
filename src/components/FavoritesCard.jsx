import React, { useState, useEffect } from 'react';
import cl from './styles/FavoritesCard.module.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../services/CartContext';

const FavoritesCard = props => {
	const [price, setPrice] = useState(null);
	const { removeFromFavorites } = useContext(CartContext);

	useEffect(() => {
		const saved = localStorage.getItem(`price_${props.game.id}`);
		if (saved) {
			const parsed = JSON.parse(saved);
			setPrice(parsed);
		}
	}, [`price_${props.game.id}`]);

	const onHandleRemove = () => {
		removeFromFavorites(props.game.id);
		props.onRemoveFavorite(props.game.id);
	};

	return (
		<div className={cl.card}>
			<Link
				to={`/game-store/${props.game.id}?page=${props.page}`}
				title={props.game.name}
			>
				<img
					className={cl.img}
					src={props.game.background_image}
					alt={props.game.name}
				/>
				<h5 className={cl.heading}>{props.game.name}</h5>
				<div className={cl.ratingBox}>
					<span className={cl.rating}>
						<img src='./star.svg' alt='star' />
						{props.game.rating}
					</span>
					<p>{props.game.released}</p>
				</div>
			</Link>
			<div className={cl.priceBox}>
				<div>
					<p className={cl.priceTitle}>Price:</p>
					<p className={cl.price}>{price}$</p>
				</div>
				<div onClick={onHandleRemove} className={cl.removeBtn}>
					<img className={cl.removeImg} src='./add.svg' alt='add' />
				</div>
			</div>
		</div>
	);
};

export default FavoritesCard;
