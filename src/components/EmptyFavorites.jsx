import React from 'react';
import cl from './styles/EmptyFavorites.module.scss';
import Button from './UI/Button';

const EmptyFavorites = () => {
	return (
		<div className={cl.main}>
			<img className={cl.img} src='./favoritesSmile.png' alt='smile' />
			<h2 className={cl.title}>There are no games</h2>
			<p className={cl.desc}>You haven't added anything</p>
			<Button className={cl.btnBox} to={`/game-store/`}>
				<img src='./btn-arrow.svg' alt='arrow' />
				Go back to home page
			</Button>
		</div>
	);
};

export default EmptyFavorites;
