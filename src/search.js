import React, {Component} from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import * as BooksAPI from './BooksAPI';



class Search extends Component {

    state = {
        error : false,
        query: '',
        searchedBooks:[],
    
    }

 
 
    //search method to search a book on a search page
searchContact = (event) => {
    const {books} = this.props
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
                const onlySearchBooks = results.filter((myBooks) =>myBooks.id !== books.id )  
            this.setState({
              
                error : false,
                searchedBooks : onlySearchBooks,
            })
        }
        })
    } else //(event.target.value === '' && this.state.error === true) 
    {
        setTimeout(() => {
            console.log('empty')
            this.setState({
                searchedBooks : [],
                error : false
            })
        },3000)
       
    }
     
    
}
checkThumbnail = (book) => {
if(book.imageLinks) {
    return book.imageLinks.thumbnail;
}
else {
    return 'no image'
}
}

    
    

    render() {
        const {query} = this.state;
        
            

        return (
            <Scrollbars style={{ height: "100vh" }}>
            <div style={{height:"2000px"}}>
         
            <div>
            <div>
                           { console.log( this.state.searchedBooks)  }
                  <div className="search-books-input-wrapper">
                <input 
                type="text" 
                placeholder="Search by title or author"
                value={query}
                onChange={ this.searchContact}
                 />
                 </div>
                 </div>
                 <div className="search-books-results">
                  <ol className="books-grid">
                  {this.state.searchedBooks.map((book) => (
                  <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                    
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage : `url(${this.checkThumbnail(book)})` }}></div>
                      <div className="book-shelf-changer">
                        <select value={book.shelf ? book.shelf : 'none'} onChange={(event) => this.props.onUpdateShelf(book,event.target.value)} >
                          <option value="move" disabled>Move to...</option>
                          <option  value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
                )) 
                }
                  </ol>
                </div>
                 </div>
                 </div>
                 </Scrollbars>
                 
        )
    }

}
export default Search;