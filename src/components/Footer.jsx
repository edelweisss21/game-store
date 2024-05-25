import React from 'react';
import cl from './styles/Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className={cl.footer}>
			<nav className={cl.nav}>
				<div className={cl.navRight}>
					<a
						className={cl.text}
						href='https://github.com/edelweisss21'
						target='_blank'
					>
						Created by Roman Prokopik
					</a>
				</div>
				<div className={cl.logo}>
					<Link to='/game-store/'>
						<img className={cl.img} src='./logo.svg' alt='logo' />
					</Link>
				</div>
				<div>
					<p className={cl.text}>2024 © game store</p>
					<p className={cl.subtext}>
						powered by{' '}
						<a href='https://rawg.io/' target='_blank'>
							rawg api
						</a>
					</p>
				</div>
			</nav>
		</footer>
	);
};

export default Footer;
