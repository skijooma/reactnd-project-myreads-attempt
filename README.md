# MyReads Project

MyReads is a "bookshelf" app that allows a user to categorize books into 3 shelves: currentlyReading; wantToRead; And read. Each book on a shelf a control to allow a user change to a desired shelf. The app provides also a search page that allows a user to search for a book using an API (BooksAPI) and still add the books to desired category. The user should find the book in the selected category, on return to the main page.

The project is an attempt to class Project 1 of Udacity's React Nanodegree program. The project built on the class provided starter code on this [repository](https://github.com/udacity/reactnd-project-myreads-starter)

## TL;DR

To run the project:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server/API description

The backend server developed against was a provided file [`BooksAPI.js`](src/BooksAPI.js) that contained the methods to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contributing

No contributions expected.
