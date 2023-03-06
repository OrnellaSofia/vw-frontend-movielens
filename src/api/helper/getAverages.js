const getAverages = (results) => {
    results.sort((a, b) => {
        return b.average_score - a.average_score;
    });
    results = results.slice(0, 10);
    results = results.map(r => ({
        ...r,
        average_score: Number(r.average_score).toFixed(1)
    }))
    const topRated = results[0].average_score;
    const bottomRated = results.slice(-1)[0].average_score;
    let overallAverageScore = results.reduce((total, next) => total + Number(next.average_score), 0) / results.length;
    overallAverageScore = Number(overallAverageScore.toFixed(1))
    return {results, topRated, bottomRated, overallAverageScore}
}

export default getAverages;