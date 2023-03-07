import React, { useState, useContext } from "react";
import { PieChartValueContext } from "./Container";
import SearchBar from "./components/SearchBar/SearchBar";
import TopMoviesDisplay from "./components/TopMoviesDisplay/TopMoviesDisplay";
import AveragesDisplay from "./components/AveragesDisplay/AveragesDisplay";
import PieChartDisplay from "./components/PieChartDisplay/PieChartDisplay";
import getTopRatedByTitle from "./api/getTopRatedByTitle";
import getTopRatedByGenre from "./api/getTopRatedByGenre";
import getPieChartData from "./api/getPieChartData";

import styles from "./App.module.scss";

function App() {
	const [searchResults, setSearchResults] = useState({});
	const [averageResults, setAverageResults] = useState({
		topRated: "N/A",
		bottomRated: "N/A",
		overallAverageScore: 0,
	});
	const [pieChartData, setPieChartData] = useState([]);
	const [input, setInput] = useState();
	const [selection, setSelection] = useState();
	const [pieChartValue] = useContext(PieChartValueContext);

	async function handlePieChartData(newPieChartValue) {
		const pieData = await getPieChartData(
			searchResults,
			selection,
			input,
			newPieChartValue
		);
		setPieChartData(pieData);
	}

	async function handleSearch(inputSearch, selectedOption) {
		let data;
		switch (selectedOption) {
			case "Title":
				data = await getTopRatedByTitle(inputSearch);
				break;
			case "Genre":
				data = await getTopRatedByGenre(inputSearch);
				break;
		}
		const pieData = await getPieChartData(
			data.results,
			selectedOption,
			inputSearch,
			pieChartValue
		);
		setInput(inputSearch);
		setSelection(selectedOption);
		setSearchResults(data.results);
		setAverageResults({ ...data });
		setPieChartData(pieData);
	}

	return (
		<div className={styles["app-container"]}>
			<SearchBar
				handleSearch={(inputSearch, selectedOption) =>
					handleSearch(inputSearch, selectedOption)
				}
			/>
			<div className={styles["dashboard-container"]}>
				<TopMoviesDisplay movies={searchResults} />
				<div className={styles["dashboard-container-right"]}>
					<AveragesDisplay averages={averageResults} />
					<div className={styles["piechart-container"]}>
						<div className={styles["piechart"]}>
							<PieChartDisplay
								data={pieChartData}
								selectedInput={selection}
								handlePieChartChange={handlePieChartData}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
