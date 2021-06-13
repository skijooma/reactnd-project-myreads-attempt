import React, { Component } from "react";
import BookShelfChanger from "./BookShelfChanger";
import BookAuthors from "./BookAuthors";


class Book extends Component {

    render() {

        const { bookTitle, bookThumbnail, bookAuthors, shelf } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ bookThumbnail })` }}></div>
                    <BookShelfChanger
                        currentShelf = { shelf }
                        defaultValue = { shelf}
                    >
                    </BookShelfChanger>
                </div>
                <div className="book-title">{ bookTitle }</div>
                <BookAuthors
                    authors = { bookAuthors }
                >
                </BookAuthors>
            </div>
        );
    }
}

export default Book;