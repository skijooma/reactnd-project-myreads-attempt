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
