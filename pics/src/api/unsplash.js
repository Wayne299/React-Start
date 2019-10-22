import axios from "axios";

export default axios.create({
	baseURL: "http://api.unsplash.com/search/photos",
	headers: {
		Authorization:
			"Client-ID 50d197b473f6ba8738f27373cc6c3830d56921aeecbb36766b160b0d52db21e8"
	}
});
