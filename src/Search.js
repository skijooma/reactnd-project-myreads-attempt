import debounce from "lodash.debounce";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";


const Search = (props) => {

	/* Local component state */
	const [bookResults, setBookResults] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");

	/* Local functions */
	const updateQuery = (query) => {

		setSearchQuery(query);
		doSearch();
	};

	const doSearch = debounce(() => {

		BooksAPI.search(searchQuery)
			.then(results => {
				setBookResults(results)
			});
	}, 40);

	const onAddToAShelf = (bookToAdd, shelf) => {

		bookToAdd.shelf = shelf;
		props.onAddToAShelf(bookToAdd);
	};

	const addShelvedBooksToSearch = () => {

		let bookIndex;
		let searchResults = bookResults;

		props.shelvedBooks.forEach(shelfBook => {
			if (searchResults !== undefined
				&& searchResults.length > 0
				&& searchResults.some((searchBook, index) => {
					bookIndex = index
					return searchBook.id === shelfBook.id
				})) {
				searchResults.splice(bookIndex, 1, shelfBook)
			}
		})

		return searchResults;
	}

	const amalgamatedBooks = addShelvedBooksToSearch();

	/* Component hooks */
	useEffect(() => doSearch.cancel());

	return (
		<div className = "search-books">
			<div className = "search-books-bar">
				<Link
					to = '/'
					className = "close-search"
				>
					Close
				</Link>

				<div className = "search-books-input-wrapper">
					{/*
					 NOTES: The search from BooksAPI is limited to a particular set of search terms.
					 You can find these search terms here:
					 https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

					 However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
					 you don't find a specific author or title. Every search is limited by search terms.
					 */}
					<input
						type = "text"
						placeholder = "Search by title or author"
						value = {searchQuery}
						onChange = {(event) => updateQuery(event.target.value)}
					/>

				</div>
			</div>
			<div className = "search-books-results">
				<ol className = "books-grid">
					{amalgamatedBooks !== undefined && amalgamatedBooks.length > 0 &&
						amalgamatedBooks.map((book) => (
							<li key = {book.id}>
								<Book
									bookTitle = {book.title}
									bookThumbnail = {book.imageLinks && book.imageLinks.smallThumbnail}
									bookAuthors = {book.authors}
									shelf = {book.shelf}
									book = {book}
									onAddToAShelf = {onAddToAShelf}
								/>
							</li>
						))
					}
				</ol>
			</div>
		</div>
	)
}


export default Search;
