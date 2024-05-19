import React from 'react';
import cl from './styles/Completed.module.scss';
import Button from './UI/Button';

const Completed = () => {
	return (
		<div className={cl.main}>
			<div className={cl.inner}>
				<img className={cl.img} src='./completed.png' alt='completed' />
				<h2 className={cl.title}>The order was successfully placed</h2>
				<p className={cl.desc}>Your order will be delivered by courier</p>
				<Button className={cl.btnBox} to={`/game-store/`}>
					<img src='./btn-arrow.svg' alt='arrow' />
					Go back to home page
				</Button>
			</div>
		</div>
	);
};

export default Completed;
