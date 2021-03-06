import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookList from './BookList'
import * as BooksAPI from '../BooksAPI'

class Search extends Component {
	static PropTypes = {
    updateShelfForBook: PropTypes.func.isRequired,
    booksOnShelf: PropTypes.array
	}

  state = {
    showingBooks: [],
    query: ''
  }

  /**
  * @description Search books.
  * @param {string} query
  */
  searchBooks = (query) => {
    this.setState({ query });

    BooksAPI.search(query, 20).then((showingBooks) => {
      if (showingBooks && !showingBooks.error) {
        this.setState({ showingBooks })
      } else {
        this.setState({ showingBooks: []})
      }
    })
  }

  /**
  * @description Takes in a book ID and returns books's shelfID if
                 the book is on a shelf. Else, false.
  * @param {string} bookID
  */
  isBookOnShelf = (bookID) => {
    const book = this.props.booksOnShelf.find((b) => {
        return b.id === bookID;
      })
    return book ? book.shelf : false;
  }

	render() {
    const { updateShelfForBook } = this.props;
    const { showingBooks, query } = this.state;

		return (
			<div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search"
              value={query}
              onChange={(e) => this.searchBooks(e.target.value)}
          />
          </div>
        </div>
s
        <div className="search-books-results">
          <BookList books={showingBooks}
            handleUpdateShelfForBook={updateShelfForBook}
            isBookOnShelf={this.isBookOnShelf}/>
        </div>
      </div>
		)
	}
}


export default Search