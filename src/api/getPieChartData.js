import getTags from './helper/getTags';
import getGenres from './helper/getGenres';
import getAllByGenre from './helper/getAllByGenre';

async function getPieChartData(movies, searchType, inputSearch, pieChartValue) {
    if(searchType === 'Title') {
        if(pieChartValue === "Tags") {
            const tagsData = getTags(movies)
            const parsedData =  tagsData.map(data => ({
                id: data.key,
                label: data.key,
                value: data.count,
            }))
            return parsedData
        } else {
            const genresData = getGenres(movies)
            const parsedData =  genresData.map(data => ({
                id: data.key,
                label: data.key,
                value: data.count,
            }))
            return parsedData
        }
    } else {
        const allMoviesByGenre = await getAllByGenre(inputSearch);
        const tagsData = getTags(allMoviesByGenre)
        let parsedData =  tagsData.map(data => ({
            id: data.key,
            label: data.key,
            value: data.count,
        }))
        parsedData = parsedData.sort((a, b) => b.value - a.value).slice(0, 20)
        return parsedData
    }
}

export default getPieChartData;