import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Shelf from './Shelf'
import * as Shelves from '../ShelfTypeConsants'

class ListShelves extends Component {
	static PropTypes = {
		books: PropTypes.array,
    updateShelfForBook: PropTypes.func.required
	}

	render() {
    const { books, updateShelfForBook } = this.props;

		return (
			<div className="list-books">
        <div className="list-books-title">
          <h1>My Library</h1>
        </div>
        <div className="list-books-content">
          {Shelves.Types.map(
            (shelf, index) => 
              <Shelf 
                key={index} 
                shelf={shelf} 
                books={books.filter(
                        (book) => book.shelf === shelf.id)}
                handleUpdateShelfForBook={updateShelfForBook}
              />
          )}
        </div>
      </div>
		)
	}
} 


export default ListShelves