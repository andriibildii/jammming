import { useState } from 'react';
// Style import
import './App.css';
// Components import
import SearchBarFunction from '../SearchBar/SearchBarFunction';
import SearchResultsFunction from '../SearchResults/SearchResultsFunction';
import PlaylistFunction from '../Playlist/PlaylistFunction';
// Spotify import
import Spotify from '../../util/Spotify';

function AppFunction(props) {
	const [searchResults, setSearchResults] = useState([]);
	const [playlistName, setPlaylistName] = useState('New Playlist');
	const [playlistTracks, setPlaylistTracks] = useState([]);
	// const {track,onSave,onNameChange,onRemove} = props;

	// Add Tracks to a Playlist
	function addTrack(track) {
		let tracks = playlistTracks;
		if(tracks.find(savedTrack => savedTrack.id === track.id)){
			return;
		}
		tracks.push(track);
		setPlaylistTracks(tracks);
  	}

	// Remove Tracks from a Playlist
	function removeTrack(track) {
		let tracks = playlistTracks;
		tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)
		setPlaylistTracks(tracks);
  	}

	// Change the Name of a Playlist
	function updatePlaylistName(name) {
		setPlaylistName(name);
	}

	// Method that Saves the Playlist to a User's Account
	function savePlaylist() {
		const trackUris = playlistTracks.map(track => track.uri);
		Spotify.savePlaylist(playlistName,trackUris)
		setPlaylistTracks([]);
	}

	// Hook up Search Bar to Spotify Search
	// Implement Spotify Search Request
	function search(term) {
		Spotify.search(term).then(searchResults => setSearchResults(searchResults));
	}

	return (
		<div>
			<h1>Jammming<span className="highlight">Function</span></h1>
			<div className="App">
				<SearchBarFunction onSearch={search}/>
				<div className="App-playlist">
					<SearchResultsFunction 
						searchResults={searchResults} 
						onAdd={addTrack} />
					<PlaylistFunction 
						playlistName={playlistName} 
						playlistTracks={playlistTracks} 
						onRemove={removeTrack} 
						onNameChange={updatePlaylistName} 
						onSave={savePlaylist} />
				</div>
			</div>
		</div>
	);


	/* componentDidMount() {
		window.addEventListener('load', () => {Spotify.getAccessToken()});
	} */
}
 
export default AppFunction;