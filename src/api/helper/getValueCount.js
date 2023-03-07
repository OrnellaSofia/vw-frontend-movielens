// Returns an array of objects, with the name of a value and the count (# times it shows up)
const getValueCount = (movies, value) => {
	let allValues = [];
	movies.forEach((movie) => {
		if (movie[value].length > 0) {
			const values = movie[value].split("|");
			allValues = allValues.concat(values);
		}
	});
	let count = {};
	allValues.forEach((value) => {
		if (count[value]) {
			count[value] += 1;
		} else {
			count[value] = 1;
		}
	});
	const result = Object.keys(count).map((x) => {
		return { key: x, count: count[x] };
	});
	return result;
};

export default getValueCount;