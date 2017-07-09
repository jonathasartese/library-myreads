import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookList extends Component {
	static PropTypes = {
		books: PropTypes.array,
    handleUpdateShelfForBook: PropTypes.func.isRequired
	}

	render() {
		const { books, handleUpdateShelfForBook } = this.props

		return (
			<ol className="books-grid">
        {
          books.map(book => 
            <li key={book.id} >
              <Book book={book} 
                    updateShelfForBook={handleUpdateShelfForBook}
              />
            </li>
          )
        } 
      </ol>
		)
	}

} 

export default BookList