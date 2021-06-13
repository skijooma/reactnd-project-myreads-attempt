import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link, Route } from "react-router-dom";
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

    render() {

        /* Extracting unique shelf categories from all the available books */
        const shelves = [...new Set(this.state.books.map(book => book.shelf))];

        /* Categorizing books into respective shelves */
        const shelfBooks = shelves.map(shelf => this.state.books.filter(book => book.shelf === shelf))

        return (
          <div className="app">
            <Route
                exact
                path = "/"
                render = { () => (
                    <Main
                        books = { this.state.books }
                    >

                    </Main>
                )}
            >
            </Route>

            <Route
                path = "/search"
                render = { () => (
                    <Search>

                    </Search>
                )}
            >
            </Route>
          </div>
        )
    }
}

export default BooksApp;
