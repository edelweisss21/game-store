import React, { useContext } from 'react';
import cl from './styles/ModalCart.module.scss';
import Button from './UI/Button';
import { Link } from 'react-router-dom';
import { CartContext } from '../services/CartContext';

const ModalCart = ({ game, price }) => {
	const { setShowModal } = useContext(CartContext);
	return (
		<div className={cl.modal}>
			<div className={cl.modalTitleBox}>
				<img className={cl.check} src='./check.svg' alt='check' />
				<h2 className={cl.modalTitle}>The game has been added to the cart</h2>
			</div>
			<div className={cl.modalInfo}>
				<Link to={`/game-store/${game && game.id}`}>
					<img
						className={cl.modalImg}
						src={game && game.background_image}
						alt={game && game.name}
					/>
				</Link>
				<div className={cl.modalBox}>
					<Link to={`/game-store/${game && game.id}`}>
						<h5 className={cl.modalHeading}>{game && game.name} -</h5>
					</Link>
					<p className={cl.modalPrice}>{price}$</p>
				</div>
				<Button
					to='/game-store/cart'
					className={cl.button}
					onClick={() => setShowModal(false)}
				>
					Go to the cart
				</Button>
			</div>
		</div>
	);
};

export default ModalCart;
