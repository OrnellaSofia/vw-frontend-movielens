import getMovies from '../queries/getMovies';

async function getTopRatedByTitle(title) {
    const allMovies = await getMovies();
    let topRated = 'N/A';
    let bottomRated = 'N/A';
    let overallAverageScore = 0;
    let results = allMovies.data.filter(movie => {
        return movie.title.toLowerCase().includes(title);
    })
    if(results.length > 0) {
        results.sort((a, b) => {
            return b.average_score - a.average_score;
        });
        results = results.slice(0, 10);
        results = results.map(r => ({
            ...r,
            average_score: Number(r.average_score).toFixed(1)
        }))
        topRated = results[0].average_score;
        bottomRated = results.slice(-1)[0].average_score;
        overallAverageScore = results.reduce((total, next) => total + Number(next.average_score), 0) / results.length;
        overallAverageScore = Number(overallAverageScore.toFixed(1))
        console.log('overallAverageScore', overallAverageScore)
    }
    return {results, topRated, bottomRated, overallAverageScore};
}

export default getTopRatedByTitle