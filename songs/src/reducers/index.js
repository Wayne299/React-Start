import { combineReducers } from "redux";

const songsReducer = () => {
	return [
		{ title: "Anyone", duration: "4:40" },
		{ title: "Baby", duration: "2:30" },
		{ title: "Cindy", duration: "3:15" },
		{ title: "Dangerous", duration: "1:45" }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
