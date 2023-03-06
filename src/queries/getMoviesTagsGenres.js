import parseCsvData from './parseCsvData';

async function getMoviesTagsGenres() {
    const movies = await parseCsvData('data/movies_tags_ratings.csv')
    return movies
}

export default getMoviesTagsGenres;