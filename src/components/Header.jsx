import React from 'react';
import cl from './styles/Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className={cl.header}>
			<nav className={cl.nav}>
				<div className={cl.logo}>
					<Link to='/game-store/'>
						<img src='./logo.svg' alt='logo' />
					</Link>
					<div>
						<h2 className={cl.logoTitle}>GAME STORE</h2>
						<p className={cl.logoSubtitle}>The best game shop</p>
					</div>
				</div>
				<div className={cl.navRight}>
					<Link to={`/game-store/cart`} className={cl.elemBox}>
						<img src='./basket.svg' alt='basket' />
						Cart
					</Link>
					<Link to={`/game-store/favorites`} className={cl.elemBox}>
						<img src='./saved.svg' alt='saved' />
						Favorites
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
