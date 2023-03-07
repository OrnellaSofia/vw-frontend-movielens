import getValueCount from "./helper/getValueCount";
import getAllByGenre from "./helper/getAllByGenre";

const parsePieChartData = (data) => {
	const parsedData = data.map((data) => ({
		id: data.key,
		label: data.key,
		value: data.count,
	}));
	return parsedData;
};

async function getPieChartData(movies, searchType, inputSearch, pieChartValue) {
	if (searchType === "Title") {
		if (pieChartValue === "Tags") {
			const tagsData = getValueCount(movies, "tag");
			const parsedData = parsePieChartData(tagsData);
			return parsedData;
		} else {
			const genresData = getValueCount(movies, "genres");
			const parsedData = parsePieChartData(genresData);
			return parsedData;
		}
	} else {
		const allMoviesByGenre = await getAllByGenre(inputSearch);
		const tagsData = getValueCount(allMoviesByGenre, "genres");
		let parsedData = tagsData.map((data) => ({
			id: data.key,
			label: data.key,
			value: data.count,
		}));
		parsedData = parsedData.sort((a, b) => b.value - a.value).slice(0, 15); // Only show the 15 more used tags
		return parsedData;
	}
}

export default getPieChartData;
