import React from "react";
import MovieTag from '../MovieTag/MovieTag';

import styles from './TopMoviesDisplay.module.scss';

const TopMoviesDisplay = ({ movies }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Top 10 Movies</h1>
            <div className={styles.list}>
                {
                    movies?.length > 0 ? (
                        movies.map(movie => <MovieTag movie={movie} />)
                    ) : (
                        <p>No data has been found</p>
                    )
                }
            </div>
        </div>
    )
}

export default TopMoviesDisplay;
