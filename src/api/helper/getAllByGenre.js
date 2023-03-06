import getMovies from '../../queries/getMovies';

async function getAllByGenre(genre) {
    const allMovies = await getMovies();
    let results = allMovies.data.filter(movie => {
        return movie.genres.includes(genre);
    })
    return results;
}

export default getAllByGenre