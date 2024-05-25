import React, { useState, useMemo, useCallback } from 'react';
import cl from './styles/Main.module.scss';
import Input from './UI/Input';
import useGames from '../hooks/useGames';
import Loader from './UI/Loader';
import SortSelect from './UI/SortSelect';
import SortAndFilter from './SortAndFilter';

const Main = () => {
	const { games, isLoading, error, page } = useGames();
	const [query, setQuery] = useState('');
	const [sortOption, setSortOption] = useState('popular');

	const handleSortOption = useCallback(selectedOption => {
		setSortOption(selectedOption);
	}, []);

	const handleSearch = useCallback(e => {
		setQuery(e.target.value);
	}, []);

	return (
		<main className={cl.main}>
			<div className={cl.box}>
				<h1 className={cl.title}>All games</h1>
				<div className={cl.inputBox}>
					<SortSelect
						placeholder='Sort by...'
						onChange={handleSortOption}
						value={sortOption}
					/>
					<Input onChange={handleSearch} placeholder='Search...' />
				</div>
			</div>
			{error ? (
				<h2 className={cl.error}>Oops, we couldn't upload the data.</h2>
			) : isLoading ? (
				<Loader />
			) : (
				<SortAndFilter
					games={games}
					query={query}
					sortOption={sortOption}
					page={page}
				/>
			)}
		</main>
	);
};

export default Main;
