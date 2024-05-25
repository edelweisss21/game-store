import React, {
	useContext,
	useMemo,
	useState,
	useCallback,
	useRef,
} from 'react';
import cl from './styles/SortAndFilter.module.scss';
import Card from './Card';
import Modal from './UI/Modal';
import { CartContext } from '../services/CartContext';
import ModalCart from './ModalCart';

const SortAndFilter = ({ games, sortOption, query, page }) => {
	const price = 55;
	const { showModal, setShowModal } = useContext(CartContext);
	const [selectedGame, setSelectedGame] = useState(null);
	const nodeRef = useRef(null);

	const handleSelectedGame = useCallback(
		game => {
			setSelectedGame(game);
			setShowModal(true);
		},
		[setShowModal]
	);

	const sortedGames = useMemo(() => {
		let sorted = [...games];
		switch (sortOption) {
			case 'alphabet':
				sorted.sort((a, b) => a.name.localeCompare(b.name));
				break;
			case 'rating':
				sorted.sort((a, b) => b.rating - a.rating);
				break;
			default:
			case 'popular':
				break;
		}
		return sorted.filter(game => {
			return game.name.toLowerCase().includes(query.toLowerCase());
		});
	}, [games, query, sortOption]);

	return (
		<>
			{sortedGames.length === 0 ? (
				<p className={cl.noGamesQuery}>
					There are no games matching your query
				</p>
			) : (
				<ul className={cl.gamesBox}>
					{sortedGames.map(game => (
						<li className={cl.cardBox} key={game.id}>
							<Card
								game={game}
								page={page}
								price={price}
								onClickModal={() => handleSelectedGame(game)}
							/>
						</li>
					))}
				</ul>
			)}
			{showModal && selectedGame && (
				<Modal>
					<div ref={nodeRef}>
						<ModalCart game={selectedGame} price={price} />
					</div>
				</Modal>
			)}
		</>
	);
};

export default SortAndFilter;
