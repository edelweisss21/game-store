import cl from './styles/CardTags.module.scss';

const CardTags = ({ game }) => {
	return (
		<div className={cl.gameInfoBox}>
			<div className={cl.tagBox}>
				<h3 className={cl.gameInfoTitles}>Platforms</h3>
				<p className={cl.gameInfoDesc}>
					{game &&
						game.platforms.map((platform, i) => (
							<span key={platform.platform.id}>
								{platform.platform.name}
								{i !== game.platforms.length - 1 && ', '}
							</span>
						))}
				</p>
			</div>
			<div className={cl.tagBox}>
				<h3 className={cl.gameInfoTitles}>Genres</h3>
				<p className={cl.gameInfoDesc}>
					{game &&
						game.genres.map((genre, i) => (
							<span key={genre.id}>
								{genre.name}
								{i !== game.genres.length - 1 && ', '}
							</span>
						))}
				</p>
			</div>
			<div className={cl.tagBox}>
				<h3 className={cl.gameInfoTitles}>Age rating</h3>
				<p className={cl.gameInfoDesc}>
					{game && game.esrb_rating && game.esrb_rating.name
						? game.esrb_rating.name
						: 'Not exist'}
				</p>
			</div>
			<div className={cl.tagBox}>
				<h3 className={cl.gameInfoTitles}>Release date</h3>
				<p className={cl.gameInfoDesc}>{game && game.released}</p>
			</div>
			<div className={`${cl.tagBox} ${cl.tags}`}>
				<h3 className={cl.gameInfoTitles}>Tags</h3>
				<p className={cl.gameInfoDesc}>
					{game &&
						game.tags.map((tag, index) => (
							<span key={tag.id}>
								{tag.name}
								{index !== game.tags.length - 1 && ', '}
							</span>
						))}
				</p>
			</div>
		</div>
	);
};

export default CardTags;
