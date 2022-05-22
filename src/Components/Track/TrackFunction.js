import './Track.css';

function TrackFunction(props, track) {
	const {isRemoval, onAdd, onRemove} = props;
	const {name, artist, album} = track;

	

	function renderAction() {
		isRemoval ? <button className="Track-action" onClick={removeTrack}>-</button> : <button className="Track-action" onClick={addTrack}>+</button>;
	}

	// Add Tracks to a Playlist
	function addTrack() {
		onAdd(track);
	}

	// Remove Tracks from a Playlist
	function removeTrack() {
		onRemove(track);
	}

	return ( 
		<div className="Track">
		<div className="Track-information">
			<h3>{name}</h3>
			<p>{artist} | {album}</p>
		</div>
		{renderAction}
		</div>
	);
}
 
export default TrackFunction;