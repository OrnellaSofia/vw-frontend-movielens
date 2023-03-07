import React, { useContext } from "react";
import { PieChartValueContext } from "../../Container";
import { ResponsivePie } from "@nivo/pie";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import styles from "./PieChartDisplay.module.scss";

const PieChartDisplay = ({ data, selectedInput, handlePieChartChange }) => {
	const [pieChartValue, setPieChartValue] = useContext(PieChartValueContext);

	const handleSelectedDataChange = (e) => {
		setPieChartValue(e.target.value);
		handlePieChartChange(e.target.value);
	};

	return (
		<>
			<div className={styles["text-container"]}>
				<h2>Most popular {pieChartValue === "Tags" ? "tags" : "genres"}</h2>
				{selectedInput && (
					<RadioGroup
						row
						name="piechart-selector"
						value={pieChartValue}
						onChange={(e) => handleSelectedDataChange(e)}
					>
						<FormControlLabel value="Tags" control={<Radio />} label="Tags" />
						{selectedInput === "Title" && (
							<FormControlLabel
								value="Genres"
								control={<Radio />}
								label="Genres"
							/>
						)}
					</RadioGroup>
				)}
			</div>
			{data?.length > 0 ? (
				<ResponsivePie
					data={data}
					margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
					innerRadius={0.4}
					padAngle={0.7}
					cornerRadius={3}
					activeOuterRadiusOffset={10}
					borderWidth={1}
					arcLinkLabelsTextColor="#333333"
					arcLinkLabelsThickness={2}
					arcLinkLabelsColor={{ from: "color" }}
					arcLabelsSkipAngle={10}
					arcLabelsTextColor={{
						from: "color",
						modifiers: [["darker", 2]],
					}}
					sortByValue={true}
				/>
			) : (
				<p>No data to display.</p>
			)}
		</>
	);
};

export default PieChartDisplay;
