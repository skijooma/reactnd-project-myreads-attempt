import React, { Component } from "react";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";


class BookShelf extends Component {

    onShelfChange = (updatedBook, newShelf) => {

        BooksAPI.update(updatedBook, newShelf)
            .then(() => {
                BooksAPI.getAll()
                    .then(books => {
                        if (this.props.onShelfChange){
                            this.props.onShelfChange(); // Propagating shelf state change to parent component (Main)
                            console.log("Changed shelf... ("+ updatedBook.title +") ", updatedBook.shelf);
                        }
                    })
            })
    }

    render() {

        const { booksInShelf, shelfTitle } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ shelfTitle }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            booksInShelf.map((book, index) => (
                                <li key = { index }>
                                    <Book
                                        bookTitle = { book.title }
                                        bookThumbnail = { book.imageLinks.smallThumbnail && book.imageLinks.smallThumbnail }
                                        bookAuthors = { book.authors }
                                        shelf = { book.shelf }
                                        book = { book }
                                        onShelfChange = { this.onShelfChange }
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