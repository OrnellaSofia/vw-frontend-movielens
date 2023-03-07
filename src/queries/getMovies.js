import parseCsvData from "./parseCsvData";

async function getMovies() {
	const movies = await parseCsvData("data/movies_tags_ratings.csv");
	return movies;
}

export default getMovies;
