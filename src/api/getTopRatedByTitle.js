import getMovies from '../queries/getMovies';
import getAverages from './helper/getAverages';

async function getTopRatedByTitle(title) {
    const allMovies = await getMovies();
    let topRated = 'N/A';
    let bottomRated = 'N/A';
    let overallAverageScore = 0;
    let results = allMovies.data.filter(movie => {
        return movie.title.toLowerCase().includes(title);
    })
    if(results.length > 0) {
        return getAverages(results)
    }
    return {results, topRated, bottomRated, overallAverageScore};
}

export default getTopRatedByTitle
