import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListShelves from './components/ListShelves'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  /** Get all books. */
  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  updateShelfForBook = (shelfID, bookID) => {
    const books = [...this.state.books];
    const book = books.find((book) => {
      return book.id === bookID;
    });
    BooksAPI.update(book, shelfID);
    book.shelf = shelfID;
    this.setState({ books });
  }

  render() {

    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>

            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )}/>

        <Route exact path='/' render={() => (
          <div>
            <ListShelves books={this.state.books} updateShelfForBook={this.updateShelfForBook} />
            <div className="open-search">
              <Link to='/search'>Add Contact</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
