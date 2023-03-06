import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import TopMoviesDisplay from './components/TopMoviesDisplay/TopMoviesDisplay';
import AveragesDisplay from './components/AveragesDisplay/AveragesDisplay';
import getTopRatedByTitle from './api/getTopRatedByTitle';

import styles from './App.module.scss';

function App() {
  const [searchResults, setSearchResults] = useState({});
  const [averageResults, setAverageResults] = useState({
    topRated: 'N/A',
    bottomRated: 'N/A',
    overallAverageScore: 0,
  })

  async function handleSearch(inputSearch) {
    const {results, topRated, bottomRated, overallAverageScore} = await getTopRatedByTitle(inputSearch)
    setSearchResults(results)
    setAverageResults({
      topRated: topRated, 
      bottomRated: bottomRated, 
      overallAverageScore: overallAverageScore,
    })
  }

  return (
      <div className={styles['app-container']}>
          <SearchBar handleSearch={inputSearch => handleSearch(inputSearch)} />
          <div className={styles['dashboard-container']}>
              <TopMoviesDisplay movies={searchResults}/>
              <div className={styles['dashboard-container-right']}>
                <AveragesDisplay averages={averageResults}/>
              </div>
          </div>
      </div>
  );
}

export default App;
