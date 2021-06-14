import React, { Component } from "react";


class BookAuthors extends Component {

    render() {

        const { authors } = this.props;
        const bookListItems = authors &&
            authors.map(author => (
                <div
                    className="book-authors"
                    key = { author }
                >
                    { author }
                </div>
        ))

        return (
            <div>
                { bookListItems }
            </div>
        );
    }
}

export default BookAuthors;