import { useState } from "react";
import data from "../data.json";
const SearchBar = ({ data, setData }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
		const filteredData = data.filter((item) =>
			item.toLowerCase().includes(e.target.value.toLowerCase())
		);
		setData(filteredData);
	};
	return (
		<div className="items-center align-middle text-center gap-10 mt-10 ">
			<input
				className="border-4 rounded-lg border-red-600 mr-5"
				type="text"
				placeholder="Search..."
				value={searchTerm}
				onChange={handleSearch}
			/>
			<button className="text-red-600 text-xl">Search</button>
		</div>
	);
};

export default SearchBar;
