import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'

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
            <BookList books={books}
              handleUpdateShelfForBook={handleUpdateShelfForBook}/>
          }
        </div>
      </div>
		)
	}

}


export default Shelf