import React, { useEffect, useState } from 'react'
import { Route } from "react-router-dom";
import './App.css'
import * as BooksAPI from "./BooksAPI";
import Main from "./Main";
import Search from "./Search";


const BooksApp = () => {

	const [books, setBooks] = useState([]);

	useEffect(() => {
		BooksAPI.getAll()
			.then(books => {
				setBooks(books)
			});
	}, []);

	const onShelfChange = () => {

		/* Getting list of books with updated shelves, & updating state */
		BooksAPI.getAll()
			.then((books) => {
				setBooks(books)
			})
	}

	const onAddToAShelf = (bookAdded) => {

		/* New books being added to a shelf, from the search page */
		BooksAPI.update(bookAdded, bookAdded.shelf)
			.then(() => {
				BooksAPI.getAll()
					.then(books => {
						setBooks(books);
					})
			})
	}

	return (
		<div className = "app">
			<Route
				exact
				path = "/"
				render = {() => (
					<Main
						books = {books}
						onShelfChange = {onShelfChange}
					/>
				)}
			>
			</Route>

			<Route
				path = "/search"
				render = {() => (
					<Search
						onAddToAShelf = {onAddToAShelf}
						shelvedBooks = {books}
					/>
				)}
			>
			</Route>
		</div>
	)
}


export default BooksApp;
