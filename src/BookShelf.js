import PropTypes from "prop-types";
import React from "react";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";


const BookShelf = (props) => {

	const { booksInShelf, shelfTitle } = props;
	const onShelfChange = (updatedBook, newShelf) => {

		BooksAPI.update(updatedBook, newShelf)
			.then(() => {
				if (props.onShelfChange) {
					props.onShelfChange(); // Propagating shelf state change to parent component (Main)
				}
			})
	};

	return (
		<div className = "bookshelf">
			<h2 className = "bookshelf-title">{shelfTitle}</h2>
			<div className = "bookshelf-books">
				<ol className = "books-grid">
					{
						booksInShelf.map((book, index) => (
							<li key = {index}>
								<Book
									bookTitle = {book.title}
									bookThumbnail = {book.imageLinks.smallThumbnail && book.imageLinks.smallThumbnail}
									bookAuthors = {book.authors}
									shelf = {book.shelf}
									book = {book}
									onShelfChange = {onShelfChange}
								/>
							</li>
						))
					}
				</ol>
			</div>
		</div>
	)
}


BookShelf.propTypes = {
	shelfTitle: PropTypes.string.isRequired,
	booksInShelf: PropTypes.array.isRequired,
	onShelfChange: PropTypes.func.isRequired
}


export default BookShelf;
