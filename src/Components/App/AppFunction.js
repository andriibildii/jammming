import { useState, useEffect } from 'react';
// Style import
import './App.css';
// Components import
import SearchBarFunction from '../SearchBar/SearchBarFunction';
import SearchResultsFunction from '../SearchResults/SearchResultsFunction';
import PlaylistFunction from '../Playlist/PlaylistFunction';
// Spotify import
import Spotify from '../../util/Spotify';

function AppFunction() {
	const [searchResults, setSearchResults] = useState([]);
	const [playlistName, setPlaylistName] = useState('New Playlist');
	const [playlistTracks, setPlaylistTracks] = useState([]);

	// Add Tracks to a Playlist
	function addTrack(track) {
		let tracks = playlistTracks;
		if(tracks.find(savedTrack => savedTrack.id === track.id)){
			return;
		}
		tracks.push(track);
		setPlaylistTracks(prev => [...prev]);
  	}

	// Remove Tracks from a Playlist
	function removeTrack(track) {
		setPlaylistTracks(prev => prev.filter(currentTrack => currentTrack.id !== track.id))
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

	useEffect(() => {
		window.addEventListener('load', () => {Spotify.getAccessToken()});
	}, [playlistTracks, searchResults]);

	return (
		<div>
			<h1>
				Find<span className="highlight">your</span>rhythm
			</h1>
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
}
 
export default AppFunction;