# Jammming - Playlist App With the Spotify API

This is React web application called Jammming.

Firstly in the App using:
- React `Class` components,
- passing state,
- requests with the Spotify API (using `Promise`)

The App allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.

Secondly:
- all React Component was rewritten with React `Function` components
- used `Async/await` for requests with the Spotify API

------------
[Deployed App](https://find-your-rhythm.surge.sh/ "Deployed App")

https://find-your-rhythm.surge.sh/

------------
## Technologies
- React 
  - Class Components
  - Function Components
- Async JavaScript 
  - Promise
  - Async/await

------------

## Steps:
### 1. Created Static Components in files:

- SearchBar.js
- SearchResults.js
- Playlist.js
- TrackList.js
- Track.js

### 2. Pass Down Search Result and Render Result List

Pass the state of a search results parameter through a series of components to render an array of tracks

### 3. Pass down Playlist to TrackList

Pass the state of a user’s custom playlist title and tracks from the App component down to components that render them

### 4. Add Tracks to a Playlist

Implemented a process for adding a song from the search results track list to the user’s custom playlist

### 5. Remove Tracks from a Playlist

Implemented a process that removes a song from a user’s custom playlist when the user selects the `-` sign inside of a rendered track

### 6. Change the Name of a Playlist

Implemented code that allows to change the name of their playlist, and save the updated value to the App component’s state

### 7. Create a Method that Saves the Playlist to a User's Account

Created a method that will save a user’s playlist to their Spotify account and resets the state of the playlist name and tracks array

### 8. Hook up Search Bar to Spotify Search

Created a method that updates the `searchResults` parameter in the `App` component with a user’s search results

The logic allows a user to enter a search parameter, receives a response from the Spotify API, and updates the `searchResults` state with the results from a Spotify request.

### 9. Obtain a Spotify Access Token

Wrote three methods that accomplish the following:

- Get a Spotify user’s access token
- Send a search request to the Spotify API
- Save a user’s playlist to their Spotify account.

### 10. Implement Spotify Search Request

Created a method in Spotify.js that accepts a search term input, passes the search term value to a Spotify request, then returns the response as a list of tracks in JSON format

### 11. Save a User's Playlist

Created a method called `savePlaylist` that writes the learner’s custom playlist in Jammming to their Spotify account

### 12. Deploy

Used surge to deploy The App.
