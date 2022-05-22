// Obtain a Spotify Access Token
// Using the Implicit Grant Flow to setup a user’s account and make requests. '
// The implicit grant flow returns a user’s access token in the URL.

// Client id
const clientId = '227c3dd1a4d140d980ce42909457f5a8';

// Redirect URI 
// const redirectUri = "https://jammming-bildii.surge.sh";
const redirectUri = "http://localhost:3000/";

// Access token
let accessToken;

const Spotify = {
	getAccessToken() {
		if (accessToken) {
			return accessToken;
		}
	
		// check fro access token match
		const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
		const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

		if (accessTokenMatch && expiresInMatch) {
			accessToken = accessTokenMatch[1];
			const expiresIn = Number(expiresInMatch[1]);
			// grab a new access token when it expires
			window.setTimeout(() => accessToken = '',expiresIn * 1000);
			window.history.pushState('Access Token',null,'/');
			return accessToken;
		} else {
			const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
			window.location = accessUrl;
		}
	},

	// Implement Spotify Search Request
	async search(term) {
		const accessToken  = Spotify.getAccessToken();
 		const resListOfTracks = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, { headers: { Authorization: `Bearer ${accessToken}` 
		}});
		const jsonListOfTracks = await resListOfTracks.json();
		if (!jsonListOfTracks.tracks) {
			return [];
		}
		return jsonListOfTracks.tracks.items.map(track => ({
			id : track.id,
			name : track.name,
			artist : track.artists[0].name,
			album : track.album.name,
			uri : track.uri
		}))
	},

	// Save a User's Playlist
	async savePlaylist (name, trackUris) {
		if(!name || !trackUris.length) {
    		return;
   		}
		let accessToken = Spotify.getAccessToken();
		const headers = {
			Authorization:`Bearer ${accessToken}`
		} 
		let userId;

		// returns the user’s Spotify username
		const resUserId = await fetch('https://api.spotify.com/v1/me',{ 
			headers:headers
		});
		const jsonUserId = await resUserId.json();
		userId = jsonUserId.id;
		const resNewPlaylist = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,
		{
			headers:headers,
			method:'POST',
			body:JSON.stringify({ name : name })}
		);
		const jsonNewPlaylist = await resNewPlaylist.json();
		const playlistId = jsonNewPlaylist.id;
		return await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
		{
			headers : headers,
			method : 'POST',
			body : JSON.stringify({uris:trackUris})
		});
	}
}

export default Spotify;