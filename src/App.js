import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListShelves from './components/ListShelves'
import Search from './components/Search'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  /**
  * @description Set books into state from books API
  */
  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  /**
  * @description Update shelf for a book. Update persists in the server.
  * @param {string} query
  */
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
          <Search books={this.state.books} updateShelfForBook={this.updateShelfForBook}/>
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
