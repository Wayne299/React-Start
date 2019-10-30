import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
	// redux-thunl allows to return a function
	const response = await jsonPlaceholder.get("/posts");
	dispatch({
		type: "FETCH_POSTS",
		payload: response
	});
};
