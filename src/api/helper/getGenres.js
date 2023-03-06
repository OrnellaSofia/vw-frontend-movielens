const getGenres = (movies) => {
	let allGenres = [];
	movies.forEach((movie) => {
		if (movie.tag.length > 0) {
			const tags = movie.genres.split("|");
			allGenres = allGenres.concat(tags);
		}
	});
	let count = {};
	allGenres.forEach((tag) => {
		if (count[tag]) {
			count[tag] += 1;
		} else {
			count[tag] = 1;
		}
	});
	const result = Object.keys(count).map((x) => {
		return { key: x, count: count[x] };
	});
	return result;
};

export default getGenres;
