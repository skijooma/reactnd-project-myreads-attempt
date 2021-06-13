import React, { Component } from "react";
import Book from "./Book";


class BookShelf extends Component {

    render() {

        const { booksInShelf, shelfTitle } = this.props;
        booksInShelf.map(book => {
            console.log("Book => ", book)
        })

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ shelfTitle }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            booksInShelf.map(book => (
                                <li key = { book.title }>
                                    <Book
                                        bookTitle = { book.title }
                                        bookThumbnail = { book.imageLinks.smallThumbnail }
                                        bookAuthors = { book.authors }
                                        shelf = { book.shelf }
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

export default BookShelf;