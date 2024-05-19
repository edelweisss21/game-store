import React, { useState, useEffect } from 'react';
import cl from './styles/Favorites.module.scss';
import FavoritesCard from '../components/FavoritesCard';
import EmptyFavorites from '../components/EmptyFavorites';
import ArrowBack from '../components/UI/ArrowBack';

const Favorites = () => {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const saved = localStorage.getItem('favorites');
		if (saved) {
			const parsed = JSON.parse(saved);
			setFavorites(parsed);
		}
	}, []);

	const onRemoveFavorite = id => {
		setFavorites(prev => prev.filter(item => item.id !== id));
		const updatedFavorites = favorites.filter(item => item.id !== id);
		localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
	};

	return (
		<div className={cl.main}>
			<div className={cl.titleBox}>
				<ArrowBack />
				<h1 className={cl.title}>Favorites</h1>
			</div>
			{favorites.length > 0 ? (
				<div className={cl.box}>
					<ul className={cl.gamesBox}>
						{favorites.map(game => (
							<li className={cl.cardBox} key={game.id}>
								<FavoritesCard
									game={game}
									onRemoveFavorite={id => onRemoveFavorite(id)}
								/>
							</li>
						))}
					</ul>
				</div>
			) : (
				<EmptyFavorites />
			)}
		</div>
	);
};

export default Favorites;
