import React, { useState, createContext } from "react";
import App from "./App";

export const PieChartValueContext = createContext(null);

const Container = () => {
	const [pieChartValue, setPieChartValue] = useState("Tags");
	return (
		<PieChartValueContext.Provider value={[pieChartValue, setPieChartValue]}>
			<App />
		</PieChartValueContext.Provider>
	);
};

export default Container;
