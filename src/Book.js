import PropTypes from "prop-types";
import React, { Component } from "react";
import BookShelfChanger from "./BookShelfChanger";
import BookAuthors from "./BookAuthors";


class Book extends Component {

	static propTypes = {
		bookTitle: PropTypes.string.isRequired
	}

	onShelfChange = (shelf) => {

		if (this.props.onShelfChange) {
			/* A book without this property is assumed to be belonging to no shelf, & on the search page */
			this.props.onShelfChange(this.props.book, shelf); // Propagating shelf state change to parent component
															  // (Book shelf)
		} else {
			this.props.onAddToAShelf(this.props.book, shelf); // Propagating shelf state change to parent component
															  // (Search page)
		}
	}

	render() {

		const { bookTitle, bookThumbnail, bookAuthors, shelf } = this.props;

		return (
			<div className = "book">
				<div className = "book-top">
					<div className = "book-cover"
						 style = {{ width: 128, height: 193, backgroundImage: `url(${bookThumbnail})` }}/>
					<BookShelfChanger
						currentShelf = {shelf}
						onShelfChange = {this.onShelfChange}
					>
					</BookShelfChanger>
				</div>
				<div className = "book-title">{bookTitle ? bookTitle : ""}</div>
				<BookAuthors
					authors = {bookAuthors}
				>
				</BookAuthors>
			</div>
		);
	}
}


export default Book;