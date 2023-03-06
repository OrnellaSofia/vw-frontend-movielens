import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { searchOptions, genres } from './constants';

import styles from "./SearchBar.module.scss";

const SearchBar = ({ handleSearch }) => {
	const [selectedOption, setSelectedOption] = useState(searchOptions[0]);
	const [inputField, setInputField] = useState("");

	const getInputField = (selectedSearchOption) => {
		switch (selectedSearchOption) {
			case "Title":
				return (
					<TextField
						id="input-titles"
						variant="outlined"
						placeholder="Search"
						onChange={(e) => setInputField(e.target.value)}
					/>
				);
			case "Genre":
				return (
					<TextField
						id="input-genres"
            select
            value={inputField}
						label="Select"
            helperText="Please select a genre"
            onChange={(e) => setInputField(e.target.value)}
					>
						{genres.map((genre) => (
							<MenuItem key={genre} value={genre}>
								{genre}
							</MenuItem>
						))}
					</TextField>
				);
		}
	};

	return (
		<div className={styles.container}>
			<Select
				value={selectedOption}
				onChange={(e) => setSelectedOption(e.target.value)}
				displayEmpty
				placeholder="Search by..."
				inputProps={{ "aria-label": "Without label" }}
			>
				{searchOptions.map((option) => (
					<MenuItem key={option} value={option}>
						{option}
					</MenuItem>
				))}
			</Select>
			{getInputField(selectedOption)}
			<IconButton
				size="medium"
				className={styles.button}
				onClick={() => handleSearch(inputField, selectedOption)}
			>
				<SearchIcon fontSize="medium" />
			</IconButton>
		</div>
	);
};

export default SearchBar;
