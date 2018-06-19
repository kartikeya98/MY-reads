import React from 'react'
import {Link,Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Search from './search';
import './App.css';
import BooksList from './booksList';


class BooksApp extends React.Component {
  state = {
    
       error : false,
       query: '',
       searchedBooks:[],
    books : [],

  }
// check for the thumbnail of the picture
    checkThumbnail = (book) => {
      if(book.imageLinks) {
          return book.imageLinks.thumbnail;
      }
      else {
          return 'no image'
      }
      }


 

    // getting all the books
componentDidMount() {
  BooksAPI.getAll().then((book) => {
      this.setState({
          books : book,
      })
  })
}
//search method to search a book on a search page
searchContact = (event) => {

this.setState({
  query: event.target.value
})
if(event.target.value !== '') {
  BooksAPI.search(event.target.value,20)
  .then((results) => {
      if(results && results.error) {
          this.setState({
              error : true,
              searchedBooks : [],
          })
      } else {
          this.state.books.map((book) => {
              results.map((books) => {
                  if(book.id === books.id) {
                      books.shelf = book.shelf;
                  }
              })
          })
      this.setState({

          error : false,
          searchedBooks : results
      })
  }
  })
} else 
{
  setTimeout(() => {
    
      this.setState({
          searchedBooks : [],
          error : false
      })
  },3000)

}


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

          <Route exact path="/search" render={() =>

              <div className="search-books">
             <div className="search-books-bar">
               <Link to='/' className="close-search">Close</Link>
               <Search
              onUpdateShelf={this.updateShelf}
              mybooks = {this.state.books}
              searchContact = {this.searchContact}
              searchedBooks = {this.state.searchedBooks}
              checkThumbnail={this.checkThumbnail}
              />

             </div>

           </div>

  }/>
  <Route exact path="/" render={() =>
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
      <BooksList
      onUpdateShelf={this.updateShelf}
      myBooks={this.state.books}
      />
    </div>
    <div className="open-search">
  <Link to='/search'>Add a book</Link>
</div>
  </div>
  </div>
}/>
      </div>
    )
  }
}

export default BooksApp
