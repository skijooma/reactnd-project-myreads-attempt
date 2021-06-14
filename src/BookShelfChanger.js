import React, {Component} from "react";


class BookShelfChanger extends Component {

    state = {
        currentShelf: this.props.currentShelf
    }

    handleShelfChange = (event) => {

        this.setState({
            currentShelf: event.target.value
        });
        this.props.onShelfChange(event.target.value); // Propagating shelf state change to parent component (Book)
    }

    render() {

        return (
            <div className="book-shelf-changer">
                <select
                    defaultValue = { this.state.currentShelf }
                    onChange = { (event) => this.handleShelfChange(event) }
                >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none" >None</option>
                </select>
            </div>
        );
    }
}

export default BookShelfChanger;