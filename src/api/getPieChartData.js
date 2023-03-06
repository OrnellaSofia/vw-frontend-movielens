import getTags from './helper/getTags';

// {
//     "id": "java",
//     "label": "java",
//     "value": 521,
//     "color": "hsl(17, 70%, 50%)"
//   },

const getPieChartData = (movies, dataType) => {
    if(dataType === 'Title') {
        const tagsData = getTags(movies)
        console.log(tagsData)
        const parsedData =  tagsData.map(data => ({
            id: data.key,
            label: data.key,
            value: data.count,
        }))
        console.log('getPieChartData', parsedData)
        return parsedData
    } else {
        // smth
    }
}

export default getPieChartData;