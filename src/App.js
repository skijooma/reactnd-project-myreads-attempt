import React from 'react'
import './App.css'
import { Route } from "react-router-dom";
import Main from "./Main";
import Search from "./Search";
import * as BooksAPI from "./BooksAPI";


class BooksApp extends React.Component {

	state = {
		books: []
	}

	componentDidMount() {
		BooksAPI.getAll()
			.then((books) => {
				this.setState({ books })
			})
	}

	onShelfChange = () => {

		/* Getting list of books with updated shelves, & updating state */
		BooksAPI.getAll()
			.then((books) => {
				this.setState({ books })
			})
	}

	onAddToAShelf = (bookAdded) => {

		/* New books being added to a shelf, from the search page */
		BooksAPI.update(bookAdded, bookAdded.shelf)
			.then(() => {
				BooksAPI.getAll()
					.then(books => {
						this.setState({ books: books });
					})
			})
	}

	render() {

		return (
			<div className = "app">
				<Route
					exact
					path = "/"
					render = {() => (
						<Main
							books = {this.state.books}
							onShelfChange = {this.onShelfChange}
						/>
					)}
				>
				</Route>

				<Route
					path = "/search"
					render = {() => (
						<Search
							onAddToAShelf = {this.onAddToAShelf}
							shelvedBooks = {this.state.books}
						/>
					)}
				>
				</Route>
			</div>
		)
	}
}


export default BooksApp;