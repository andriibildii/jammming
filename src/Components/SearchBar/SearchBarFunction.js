import { useState } from 'react';
import './SearchBar.css';

function SearchBarFunction (props) {
const [term, setTerm] = useState('');
const {onSearch} = props;

	// Hook up Search Bar to Spotify Search
	function search() {
		onSearch(term);
	}

	function handleTermChange(event) {
		setTerm(event.target.value);
	}

	
	return (
		<div className="SearchBar">
			<input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange}/>
			<button className="SearchButton" onClick={search}>SEARCH</button>
		</div>
		);
}

export default SearchBarFunction;