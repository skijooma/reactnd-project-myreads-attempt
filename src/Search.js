import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";


class Search extends Component {

    state = {
        searchQuery: "",
        bookResults: []
    }

    updateQuery = (query) => {
        this.setState({ searchQuery: query.trim() })
        BooksAPI.search(this.state.searchQuery)
            .then(results => {
                this.setState({ bookResults: results })
            });
    }

    onAddToAShelf = (bookToAdd, shelf) => {

        bookToAdd.shelf = shelf;
        this.props.onAddToAShelf(bookToAdd);
        console.log("Added to shelf... ("+ bookToAdd.title +") ", bookToAdd.shelf);
    }

    render() {

        const { searchQuery, bookResults } = this.state;

        console.log("Searching... ("+ searchQuery +") ", bookResults)

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to = '/'
                        className = "close-search"
                    >
                        Close
                    </Link>

                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input
                            type="text" placeholder="Search by title or author"
                            value={searchQuery}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        { bookResults &&
                            bookResults.map((book, index) => (
                                <li key = { index }>
                                    <Book
                                        bookTitle = { book.title }
                                        bookThumbnail = { book.imageLinks.smallThumbnail && book.imageLinks.smallThumbnail }
                                        bookAuthors = { book.authors }
                                        shelf = { book.shelf }
                                        book = { book }
                                        onShelfChange = { this.onShelfChange }
                                        onAddToAShelf = { this.onAddToAShelf }
                                    ></Book>
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search;