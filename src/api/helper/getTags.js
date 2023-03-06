const getTags = (movies) => {
	let allTags = [];
	movies.forEach((movie) => {
		if (movie.tag.length > 0) {
			const tags = movie.tag.split("|");
			allTags = allTags.concat(tags);
		}
	});
	let count = {};
	allTags.forEach((tag) => {
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

export default getTags;
