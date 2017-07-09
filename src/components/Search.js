import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookList from './BookList'
import escapeRegExp from 'escape-string-regexp'

class Search extends Component {
	static PropTypes = {
		books: PropTypes.array,
    updateShelfForBook: PropTypes.func.isRequired
	}

  state = {
    query: ''
  }

  updateQuery = (query) => (
    this.setState({
      query: query.trim()
    })
  )

	render() {
    const { books, updateShelfForBook} = this.props;
    const { query } = this.state;

    let showingBooks = [];

    if (query) {
      // escapeRegExp to escape special charaters that might be special for regex  
      // 'i' just means the matching is not case sensitive. 
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = books.filter(
                          (book) => match.test(book.title) || 
                                    match.test(book.authors))
    }

		return (
			<div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
              value={query}
              onChange={(e) => this.updateQuery(e.target.value)} 
          />
          </div>
        </div>

        <div className="search-books-results">
          <BookList books={showingBooks} 
            handleUpdateShelfForBook={updateShelfForBook}/>
        </div>
      </div>
		)
	}
} 


export default Search