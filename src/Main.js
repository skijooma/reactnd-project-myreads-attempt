import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";


const Main = (props) => {

	const { books } = props;
	const [ showSearchPage, setShowSearchPage ] = useState(false);

	/* Extracting unique shelf categories from all the available books */
	const shelfTitles = [...new Set(books.map(book => book.shelf))];

	/* Categorizing books into respective shelves */
	const shelvesWithBooks = shelfTitles.map(shelf => books.filter(book => book.shelf === shelf));

	const onShelfChange = () => {
		props.onShelfChange();
	}

	return (
		<div className = "list-books">
			<div className = "list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className = "list-books-content">
				{
					shelvesWithBooks.map((shelf, index) => (
						<BookShelf
							booksInShelf = {shelf}
							key = {index}
							shelfTitle = {shelfTitles[index]}
							onShelfChange = {onShelfChange}
						>
						</BookShelf>
					))
				}
			</div>
			<div className = "open-search">
				<Link
					to = "/search"
				>
					<button
						onClick = {() => setShowSearchPage(true)}
						className = "open-search"
					>
						Add a book
					</button>
				</Link>
			</div>
		</div>
	)
}

Main.propTypes = {
	books: PropTypes.array.isRequired,
	onShelfChange: PropTypes.func.isRequired
}


export default Main;
