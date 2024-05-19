import React, { useContext, useEffect, useState } from 'react';
import cl from './styles/Card.module.scss';
import { Link } from 'react-router-dom';
import { CartContext } from '../services/CartContext';

const Card = props => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [isAdded, setIsAdded] = useState(false);
	const { toggleCart, toggleFavorites, isInCart, isInFavorites } =
		useContext(CartContext);

	useEffect(() => {
		localStorage.setItem(`price_${props.game.id}`, JSON.stringify(props.price));
	}, [props.price]);

	useEffect(() => {
		setIsAdded(isInCart(props.game.id));
		setIsFavorite(isInFavorites(props.game.id));
	}, [isInCart, isInFavorites, props.game.id]);

	const onClickAdd = () => {
		toggleCart(props.game);
		if (!isAdded) props.onClickModal(props.game);
	};

	return (
		<>
			<div className={cl.card}>
				<Link
					className={cl.link}
					to={`/game-store/${props.game.id}?page=${props.page}`}
				>
					<img
						className={cl.img}
						src={props.game.background_image}
						alt={props.game.name}
					/>
					<h5 className={cl.heading} title={props.game.name}>
						{props.game.name}
					</h5>
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
						<p className={cl.price}>{props.price}$</p>
					</div>
					<div
						className={isAdded ? cl.checkBtn : cl.addBtn}
						onClick={onClickAdd}
					>
						<img src={isAdded ? './check.svg' : './add.svg'} alt='add' />
					</div>
				</div>
				<div
					className={cl.saved}
					onClick={() => {
						toggleFavorites(props.game);
					}}
				>
					<img
						className={cl.savedImg}
						src={isFavorite ? './heart-active.svg' : './heart.svg'}
						alt='saved'
					/>
				</div>
			</div>
		</>
	);
};

export default Card;
