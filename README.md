# Movies dashboard (movielens dataset)

An interactive dashboard which allowes the user to look at data from movies based on their titles and movies genres. Created with React and Python.

GitHub Page: https://ornellasofia.github.io/vw-frontend-movielens/

**Packages used**
- [Papaparse](https://pages.github.com/): csv to json converter
- [Nivo Pie](https://www.npmjs.com/package/@nivo/pie): a pie chart from a data visualization library for React
- [Material UI](https://github.com/mui/material-ui): component library

## Approach

The idea of this dashboard is that the user will be able to get information on a set of movies by searching either by *Title* or by a pre-selected dropdown on *Genres*. The user has to click the magnifying glass icon in order to initiate the search.
In both cases, the following data will be presented:
- A list of the top 10 rated movies for that input
- A set of average, top and worst ratings for that input
- A pie chart with the most popular tags for that category
    - If the user is searching by "Title", they will also be able to toggle the pie chart to see the most popular genres

Comments have been added to the code to make it easier to understand

## Data

The data used was the [movielens](http://files.grouplens.org/datasets/movielens/ml-latest-small-README.html) movies database.
Some of the provided tables where combinated in order to get desired data. This was done with the python library "pandas". A pdf file with the code used was provided.

### Possible improvements

The following improvement were ideas I had during development, but where left out due to time constrains.

- The ability to search by tags
- Clean up some duplicated tags: "Pixar" and "pixar" are read as two separate tags
- Add unit tests
- Use TypeScript: I tried at first, but creating proper interfaces and types would have been quite time-consuming
- Stop movies with high ratings but few reviews to show up so high
- Improve the UI (I might need a designer for that :sweat_smile:)

Please reach out to me for any questins!
- Ornella

