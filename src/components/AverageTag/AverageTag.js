import React from "react";

import styles from "./AverageTag.module.scss";

const AverageTag = ({ title, score }) => (
	<div className={styles.container}>
		<div className={styles.score}>{score}</div>
		<div className={styles.title}>{title}</div>
	</div>
);

export default AverageTag;
