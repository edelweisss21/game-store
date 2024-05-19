import React from 'react';
import cl from './ArrowBack.module.scss';
import { Link } from 'react-router-dom';

const ArrowBack = () => {
	return (
		<Link className={cl.arrowLink} to={`/game-store/`}>
			<img src='./arrow.svg' alt='arrow' />
		</Link>
	);
};

export default ArrowBack;
