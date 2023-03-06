import React from "react";

import styles from './MovieTag.module.scss';

const MovieTag = ({ movie }) => {
    const {title, average_score: averageScore} = movie;
    return (
        <div className={styles.container}>
            <div className={styles.score}>{averageScore}</div>
            <div className={styles.title}>{title}</div>
        </div>
    )
}

export default MovieTag