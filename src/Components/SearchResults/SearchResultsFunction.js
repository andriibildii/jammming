import './SearchResults.css';
import TrackListFunction from '../TrackList/TrackListFunction';

function SearchResultsFunction(props) {
	const {searchResults, onAdd} = props;
	
	return (
		<div className="SearchResults">
			<h2>Results</h2>
			<TrackListFunction 
				tracks={searchResults} 
				onAdd={onAdd}
				isRemoval={false} />
		</div>
	);
}
 
export default SearchResultsFunction;