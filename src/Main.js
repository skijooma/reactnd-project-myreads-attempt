import React, {Component} from "react";
import {Link} from "react-router-dom";
import BookShelf from "./BookShelf";


class Main extends Component {

    onShelfChange = () => {

        this.props.onShelfChange();
    }

    render() {

        const  { books } = this.props;

        /* Extracting unique shelf categories from all the available books */
        const shelfTitles = [...new Set(books.map(book => book.shelf))];

        /* Categorizing books into respective shelves */
        const shelvesWithBooks = shelfTitles.map(shelf => books.filter(book => book.shelf === shelf))

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
                                onShelfChange = { this.onShelfChange }
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