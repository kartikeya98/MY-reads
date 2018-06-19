
import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';



const Search = (props) =>  {


        return (
            <Scrollbars style={{ height: "100vh" }}>
            <div style={{height:"2000px"}}>

            <div>
            <div>

                  <div className="search-books-input-wrapper">
                <input
                type="text"
                placeholder="Search by title or author"

                onChange={props.searchContact}
                 />
                 </div>
                 </div>
                 <div className="search-books-results">
                  <ol className="books-grid">
                  {props.searchedBooks.map((book) => (
                  <li key={book.id}>
                  <div className="book">
                    <div className="book-top">

                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage : `url(${props.checkThumbnail(book)})` }}></div>
                      <div className="book-shelf-changer">
                        <select value={book.shelf ? book.shelf : 'none'} onChange={(event) => props.onUpdateShelf(book,event.target.value)} >

                      <option  disabled>Move to...</option>

                                {book.shelf === "currentlyReading" ?
                                            <option value="currentlyReading">&#10003; Currently Reading &nbsp; &nbsp;</option> :
                                           <option value="currentlyReading">&nbsp; &nbsp; Currently Reading </option>
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


export default Search;
