import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Shelf extends Component {
	static PropTypes = {
    books: PropTypes.array,
		shelf: PropTypes.object.isRequired,
    handleUpdateShelfForBook: PropTypes.func.isRequired
	}


	render() {
		const { books, shelf, handleUpdateShelfForBook } = this.props
		return (
			<div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.title}</h2>
        <div className="bookshelf-books">
          { books && 
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
          }
        </div>
      </div>
		)
	}

} 


export default Shelf