import axios from 'axios';

class GamesService {
	static async getInfo(page = 1, pageSize = 30) {
		const apiKey = 'ac780acee4344f80b691fcbfd067dcfe';
		const response = await axios.get(
			`https://api.rawg.io/api/games?key=${apiKey}`,
			{
				params: {
					page: page,
					page_size: pageSize,
				},
			}
		);
		return response;
	}
}

export { GamesService };
