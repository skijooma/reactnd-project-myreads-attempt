import React from 'react'
import './App.css'
import {Route} from "react-router-dom";
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
                console.log("Get All books => ", books)
            })
    }

    onShelfChange = () => {

        /* Getting list of updated list of books & updating state */
        BooksAPI.getAll()
            .then((books) => {
                this.setState({ books })
            })
    }

    onAddToAShelf = (bookAdded) => {

        BooksAPI.update(bookAdded, bookAdded.shelf)
            .then(r => {
                BooksAPI.getAll()
                    .then(books => {
                        this.setState({ books: books });
                    })
            })
    }

    render() {

        return (
          <div className="app">
            <Route
                exact
                path = "/"
                render = { () => (
                    <Main
                        books = { this.state.books }
                        onShelfChange = { this.onShelfChange }
                    ></Main>
                )}
            >
            </Route>

            <Route
                path = "/search"
                render = { () => (
                    <Search
                        onAddToAShelf = { this.onAddToAShelf }
                    ></Search>
                )}
            >
            </Route>
          </div>
        )
    }
}

export default BooksApp;
