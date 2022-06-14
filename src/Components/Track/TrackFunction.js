import './Track.css';

function TrackFunction(props) {
	const {isRemoval, onAdd, onRemove, track} = props;
	// const {name, artist, album} = track;

	function renderAction() {
		if (isRemoval) {
			return <button className="Track-action" onClick={removeTrack}>-</button>
		} else {
			return <button className="Track-action" onClick={addTrack}>+</button>;
		}
	}

	// Add Tracks to a Playlist
	function addTrack() {
		return onAdd(track);
	}

	// Remove Tracks from a Playlist
	function removeTrack() {
		return onRemove(track);
	}

	return ( 
		<div className="Track">
		<div className="Track-information">
			<h3>{track.name}</h3>
			<p>{track.artist} | {track.album}</p>
		</div>
		{renderAction()}
		</div>
	);
}
 
export default TrackFunction;