import React from 'react';
import cl from './styles/EmptyCart.module.scss';
import Button from './UI/Button';

const EmptyCart = () => {
	return (
		<div className={cl.main}>
			<img className={cl.img} src='./emptyCart.png' alt='emptyCart' />
			<h2 className={cl.title}>The cart is empty</h2>
			<p className={cl.desc}>You haven't added anything to cart</p>
			<Button className={cl.btnBox} to={`/game-store/`}>
				<img src='./btn-arrow.svg' alt='arrow' />
				Go back to home page
			</Button>
		</div>
	);
};

export default EmptyCart;
