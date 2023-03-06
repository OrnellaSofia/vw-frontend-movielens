import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import getTopRatedByTitle from '../../api/getTopRatedByTitle';

import styles from './SearchBar.module.scss';

const searchOptions = [
	{
		value: "Title",
	},
	{
		value: "Genre",
	},
	{
		value: "Tag",
	},
];

const SearchBar = ({ handleSearch }) => {
  const [selectedOption, setSelectedOption] = useState(searchOptions[0].value);
  const [inputField, setInputField] = useState('');

	return (
		<div className={styles.container}>
			<Select
				value={selectedOption}
				onChange={e => setSelectedOption(e.target.value)}
        displayEmpty
        placeholder="Search by..."
				inputProps={{ "aria-label": "Without label" }}
			>
				{searchOptions.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.value}
					</MenuItem>
				))}
			</Select>
      <TextField id="outlined-basic" variant="outlined" placeholder="Search" onChange={e => setInputField(e.target.value)} />
      <IconButton size="medium" className={styles.button} onClick={() => handleSearch(inputField)}>
        <SearchIcon fontSize="medium" />
      </IconButton>
		</div>
	);
};

export default SearchBar;
