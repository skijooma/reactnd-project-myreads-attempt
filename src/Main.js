import React, { Component } from "react";
import {Link} from "react-router-dom";
import BookShelfChanger from "./BookShelfChanger";
import BookAuthors from "./BookAuthors";
import Book from "./Book";
import BookShelf from "./BookShelf";


class Main extends Component {

    render() {

        const  { books } = this.props;
        console.log("Books in here :: ", books);

        /* Extracting unique shelf categories from all the available books */
        const shelfTitles = [...new Set(books.map(book => book.shelf))];

        console.log("Shelf titles :: ", shelfTitles);

        /* Categorizing books into respective shelves */
        const shelvesWithBooks = shelfTitles.map(shelf => books.filter(book => book.shelf === shelf))

        console.log("Shelves with books :: ", shelvesWithBooks)

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {
                        shelvesWithBooks.map((shelf, index) => (
                            <BookShelf
                                booksInShelf = { shelf }
                                key = { index }
                                shelfTitle = { shelfTitles[index] }
                            >
                            </BookShelf>
                        ))
                    }
                </div>
                <div className="open-search">
                    <Link
                        to = "/search"
                    >
                        <button
                            onClick={() => this.setState({ showSearchPage: true })}
                            className = "open-search"
                        >
                            Add a book
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Main;