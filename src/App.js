import React from 'react'
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Search from './search';
import './App.css'
import MyBooks from './MyBooks'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books : [],

  }

 // getting all the books
componentDidMount() {
        BooksAPI.getAll().then((book) => {
            this.setState({
                books : book,
            })
        })
    }

   updateShelf = (book, shelf)  => {
      let newBooks = this.state.books.filter(MyBooks => MyBooks.id !== book.id)
      this.setState({
        books: newBooks.concat([book])
      });
      book.shelf = shelf;
      BooksAPI.update(book, shelf);
    }
    


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
              <Search
              onUpdateShelf={this.updateShelf}
              books = {this.state.books}
              />

            </div>
        
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>

              <MyBooks
              onUpdateShelf={this.updateShelf}
              myBooks={this.state.books}
          
              />

            </div>
            <div className="open-search">
              <Link to='/search'
               onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
            </div>
          </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
