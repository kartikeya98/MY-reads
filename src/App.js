import React from 'react'
import {Link,Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Search from './search';
import './App.css';
import BooksList from './booksList';


class BooksApp extends React.Component {
  state = {
   
    books : [],
    error : false,
    query: '',
    searchedBooks:[],

  }

 // getting all the book
componentDidMount() {
        BooksAPI.getAll().then((book) => {
            this.setState({
                books : book,
            })
        })
    }
    checkThumbnail = (book) => {
      if(book.imageLinks) {
          return book.imageLinks.thumbnail;
      }
      else {
          return 'no image'
      }
      }

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

              this.setState({
                
                  error : false,
                  searchedBooks : results,
              })
           
          }
          })
      } else 
      {
          setTimeout(() => {
              console.log('empty')
              this.setState({
                  searchedBooks : [],
                  error : false
              })
          },3000)
      }

      if(this.state.searchedBooks.length > 0) {
        const onlysearchedbooks = this.state.searchedBooks.map((book) => {
          if(book.id === this.state.books.id) {
            book.shelf === this.state.books.shelf
          }

        })
        this.setState({
          searchedBooks: onlysearchedbooks,
        })

      }
  }

   updateShelf = (book, shelf)  => {
      let newBooks = this.state.books.filter(MyBooks => MyBooks.id !== book.id)
      book.shelf = shelf;
      BooksAPI.update(book, shelf).then(() => {
        this.setState({
          books: newBooks.concat([book])
        });
      })
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
               searchContact = {this.searchContact}
               myBooks={this.state.searchedBooks}
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
