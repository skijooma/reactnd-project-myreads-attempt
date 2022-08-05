import PropTypes from "prop-types";
import React from "react";
import BookAuthors from "./BookAuthors";
import BookShelfChanger from "./BookShelfChanger";


const Book = (props) => {

	const { bookTitle, bookThumbnail, bookAuthors, shelf } = props;

	const onShelfChange = (shelf) => {

		if (props.onShelfChange) {
			/* A book without this property is assumed to be belonging to no shelf, & on the search page */
			props.onShelfChange(props.book, shelf); // Propagating shelf state change to parent component
			// (Book shelf)
		} else {
			props.onAddToAShelf(props.book, shelf); // Propagating shelf state change to parent component
			// (Search page)
		}
	}

	return (
		<div className = "book">
			<div className = "book-top">
				<div className = "book-cover"
					 style = {{ width: 128, height: 193, backgroundImage: `url(${bookThumbnail})` }}/>
				<BookShelfChanger
					currentShelf = {shelf}
					onShelfChange = {onShelfChange}
				>
				</BookShelfChanger>
			</div>
			<div className = "book-title">{bookTitle ? bookTitle : ""}</div>
			<BookAuthors
				authors = {bookAuthors}
			>
			</BookAuthors>
		</div>
	)
}


Book.propTypes = {
	bookTitle: PropTypes.string.isRequired
}


export default Book;
