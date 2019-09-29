import React from "react";

const imageList = props => {
	const images = props.images.map(({ description, id, urls }) => {
		return <img alt={description} key={id} src={urls.regular} />;
		// return <img alt={image.description} key={image.id} src={image.urls.regular} />;
	});

	return <div>{images}</div>;
};

export default imageList;
