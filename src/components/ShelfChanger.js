import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as Shelves from '../ShelfTypeConsants'

class ShelfChanger extends Component {
	static PropTypes = {
		selectedShelfID: PropTypes.string
	}

	render() {
		const { selectedShelfID } = this.props

		return (
			<div className="book-shelf-changer">
        <select value={selectedShelfID}>
          <option value="none" disabled>Move to...</option>
          {
            Shelves.Types.map((shelf) => 
              <option value={shelf.id} key={shelf.id} >
                {shelf.title}
              </option>
            )
          }
          <option value="none">None</option>
        </select>
      </div>
		)
	}
} 


export default ShelfChanger