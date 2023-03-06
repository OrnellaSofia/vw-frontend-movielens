import parseFile from './parseFile';

async function getMovies() {
    const movies = await parseFile('data/movies_ratings.csv')
    return movies
}

export default getMovies;