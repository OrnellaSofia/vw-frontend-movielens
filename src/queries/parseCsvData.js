import Papa from "papaparse";

async function parseCsvData(file) {
	const data = await Papa.parse(await fetchCsv(file), {
		header: true,
		skipEmptyLines: true,
	});
	return data;
}

async function fetchCsv(file) {
	const csv = await fetch(file).then((response) => response.text());
	return csv;
}

export default parseCsvData;
