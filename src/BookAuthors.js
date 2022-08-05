import React from "react";


const BookAuthors = (props) => {

	const { authors } = props;
	const bookListItems = authors &&
		authors.map(author => (
			<div
				className = "book-authors"
				key = {author}
			>
				{author}
			</div>
		))
	return (
		<div>
			{bookListItems}
		</div>
	)
}


export default BookAuthors;
