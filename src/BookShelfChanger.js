import React, {Component} from "react";


class BookShelfChanger extends Component {

    state = {
            currentShelf: this.props.currentShelf ? this.props.currentShelf : "none"
    }

    handleShelfChange = (event) => {

        this.setState({
            currentShelf: event.target.value
        }, this.props.onShelfChange && this.props.onShelfChange(event.target.value));
        console.log("Oh! Been clicked (handleShelfChange) *** ", event.target.value)
    }

    render() {

        console.log("Which shelf -----------  Changer ", this.props.currentShelf)

        return (
            <div className="book-shelf-changer">
                <select
                    value = { this.state.currentShelf }
                    onChange = { (event) => {
                        console.log("Oh! Been clicked *** ", event.target.value)
                        this.handleShelfChange(event)
                    }}
                >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading" >Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default BookShelfChanger;