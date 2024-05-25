import { useContext, useEffect, useState, useCallback } from 'react';
import cl from './styles/CardInfo.module.scss';
import { useParams, useLocation } from 'react-router-dom';
import CardTags from '../components/CardTags';
import Button from '../components/UI/Button';
import Loader from '../components/UI/Loader';
import useGames from '../hooks/useGames';
import { CartContext } from '../services/CartContext';
import ArrowBack from '../components/UI/ArrowBack';
import Modal from '../components/UI/Modal';
import ModalCart from '../components/ModalCart';
import Carousel from '../components/UI/Carousel';
import { CSSTransition } from 'react-transition-group';

const CardInfo = () => {
	const [game, setGame] = useState(null);
	const [price, setPrice] = useState(null);
	const { showModal, setShowModal } = useContext(CartContext);
	const { games, isLoading, error } = useGames();
	const gameIdString = useParams().id;
	const gameId = parseInt(gameIdString);
	const pageNum = useLocation();
	const page = parseInt(pageNum.search.split('=')[1]);
	const [pageSize, setPageSize] = useState(30);
	const { addToCart } = useContext(CartContext);

	const handleSelectedGame = useCallback(
		game => {
			addToCart(game);
			setShowModal(true);
		},
		[addToCart, setShowModal]
	);

	useEffect(() => {
		const selectedGame = games.find(g => g.id === gameId);
		if (selectedGame) {
			setGame(selectedGame);
			const jsonPrice = localStorage.getItem(`price_${gameId}`);
			const parsedPrice = JSON.parse(jsonPrice);
			setPrice(parsedPrice);
		}
	}, [games, gameId]);

	return (
		<div className={cl.main}>
			{error ? (
				<h2 className={cl.error}>Oops, we couldn't upload the data.</h2>
			) : isLoading ? (
				<Loader />
			) : (
				<>
					<div className={cl.titleBox}>
						<ArrowBack />
						<h1 className={cl.title}>{game && game.name}</h1>
					</div>
					<div className={cl.gameBox}>
						<img
							className={cl.cardImg}
							src={game && game.background_image}
							alt={game && game.name}
						/>
						<div className={cl.rightSide}>
							<CardTags game={game} />
							<div className={cl.btnPriceBox}>
								<div className={cl.priceBox}>
									<p className={cl.priceTitle}>Price:</p>
									<p className={cl.price}>{price}$</p>
								</div>
								<Button
									className={cl.btn}
									onClick={() => {
										handleSelectedGame(game);
									}}
								>
									Add to cart
								</Button>
							</div>
						</div>
					</div>
					<div className={cl.carouselBox}>
						<Carousel game={game} />
					</div>
				</>
			)}
			{showModal && (
				<Modal>
					<ModalCart game={game} price={price} />
				</Modal>
			)}
		</div>
	);
};

export default CardInfo;
