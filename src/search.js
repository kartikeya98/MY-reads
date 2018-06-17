import React, {Component} from 'react'
import { Scrollbars } from 'react-custom-scrollbars';


class Search extends Component {
    render() {
        return (
            <Scrollbars style={{ height: "100vh" }}>
            <div style={{height:"2000px"}}>
         
            <div>
            <div>
                  <div className="search-books-input-wrapper">
                <input 
                type="text" 
                placeholder="Search by title or author"
                onChange={ this.props.searchContact}
                 />
                 </div>
                 </div>
                 <div className="search-books-results">
                  <ol className="books-grid">
                  {this.props.myBooks.map((book) => (
                        <li key={book.id}> 
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:  `url(${this.props.checkThumbnail(book)})`}}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={(event) => this.props.onUpdateShelf(book,event.target.value)}>
                              <option value="invalid" disabled>Move to...</option>
        {book.shelf === "currentlyReading" ?
            <option value="currentlyReading">&#10003; Currently Reading &nbsp; &nbsp;</option> :
            <option value="currentlyReading">&nbsp; &nbsp; Currently Reading &nbsp; &nbsp;</option>
        }
        {book.shelf === "wantToRead" ?
            <option value="wantToRead">&#10003; Want to Read</option> :
            <option value="wantToRead">&nbsp; &nbsp; Want to Read</option>
        }
        {book.shelf === "read" ?
            <option value="read">&#10003; Read</option> :
            <option value="read">&nbsp; &nbsp; Read</option>
        }
        {book.shelf === "none" ?
            <option value="none">&#10003; None</option> :
            <option value="none">&nbsp; &nbsp; None</option>
      }
              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.title}</div>
                        </div>
                        </li>
              ))}
  
        
                  </ol>
                </div>
                 </div>
                 </div>

                 </Scrollbars>
                 
        )
    }

}
export default Search;