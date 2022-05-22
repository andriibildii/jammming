import './Playlist.css';
import TrackListFunction from '../TrackList/TrackListFunction';

function PlaylistFunction(props) {
	const {playlistTracks, onRemove, onNameChange, onSave, addTrack} = props;

	// Change the Name of a Playlist
	function handleNameChange(event) {
		onNameChange(event.target.value);
	}

	return (
		<div className="Playlist">
			<input defaultValue={"New Playlist"} onChange={handleNameChange} />
			<TrackListFunction 
				tracks={playlistTracks}
				onAdd={addTrack}					
				onRemove={onRemove}
				isRemoval={true} />
			<button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
		</div>
	);
	
}

export default PlaylistFunction;