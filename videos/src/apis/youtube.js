import axios from "axios";
const KEY = "AIzaSyCUTKRHd-Z5L0okXpyWXqLbn7e5Uv938wo"; // console.developers.google.com

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY
	}
});
