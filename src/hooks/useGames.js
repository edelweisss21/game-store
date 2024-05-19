import { useState, useEffect } from 'react';
import useFetching from './useFetching';
import { GamesService } from '../services/API/GamesService';

const useGames = () => {
	const [games, setGames] = useState([]);
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(30);

	const [fetchGames, isLoading, error] = useFetching(async () => {
		const response = await GamesService.getInfo(page, pageSize);
		setGames(response.data.results);
	});

	useEffect(() => {
		fetchGames();
	}, [page]);

	return { games, isLoading, error, page };
};

export default useGames;
