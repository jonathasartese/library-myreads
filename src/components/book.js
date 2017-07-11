import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
	static PropTypes = {
		book: PropTypes.object.isRequired,
    updateShelfForBook: PropTypes.func.isRequired
	}

  /**
  * @description Change Shelf Selection
  * @param {string} shelfID
  */
  changeShelfSelction = (shelfID) => {
    this.props.updateShelfForBook(shelfID, this.props.book);
  }

	render() {
		const { book } = this.props;

		return (
			<div className="book">
        <div className="book-top">
          <div className="book-cover"
          	style={{
          		width: 128,
          		height: 193,
          		backgroundImage: `url("${book.imageLinks ? book.imageLinks.thumbnail : ''}")`
        			}}>
				  </div>
          <ShelfChanger selectedShelfID={book.shelf}
            onChangeShelfSelection={this.changeShelfSelction}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
      </div>
		)
	}

}


export default Book