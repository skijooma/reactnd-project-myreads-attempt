import React, { useEffect, useState } from "react";


const BookShelfChanger = (props) => {

	const [currentShelf, setCurrentShelf] = useState("none");
	const handleShelfChange = (event) => {

		const currShelf = event.target.value;
		setCurrentShelf(currShelf);
		props.onShelfChange(currShelf);
	};

	useEffect(() => {
		setCurrentShelf(props.currentShelf || "none");
	})

	return (
		<div className = "book-shelf-changer">
			<select
				value = {currentShelf}
				onChange = {(event) => {
					handleShelfChange(event)
				}}
			>
				<option value = "move" disabled>Move to...</option>
				<option value = "currentlyReading">Currently Reading</option>
				<option value = "wantToRead">Want to Read</option>
				<option value = "read">Read</option>
				<option value = "none">None</option>
			</select>
		</div>
	)
}

export default BookShelfChanger;
