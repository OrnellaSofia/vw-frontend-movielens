import React from "react";
import AverageTag from "../AverageTag/AverageTag";

import styles from "./AveragesDisplay.module.scss";

const AveragesDisplay = ({ averages }) => {
	const { topRated, bottomRated, overallAverageScore } = averages;
	return (
		<div className={styles.container}>
			<AverageTag title="Average Score" score={overallAverageScore} />
			<AverageTag title="Top Rating" score={topRated} />
			<AverageTag title="Worst Rating" score={bottomRated} />
		</div>
	);
};

export default AveragesDisplay;
