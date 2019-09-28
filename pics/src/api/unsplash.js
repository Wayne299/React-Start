import axios from "axios";

export default axios.create({
	baseURL: "http://api.unsplash.com/search/photos",
	headers: {
		Authorization: "Client-ID"
	}
});
