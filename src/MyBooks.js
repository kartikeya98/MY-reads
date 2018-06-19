import React  from 'react';

const  MyBooks = (props) =>   {
 
        return (
          <div> 
             <div className="bookshelf-books">
              <ol className="books-grid">
              {props.myBooks.map((book) => (
                        <li key={book.id}> 
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.checkThumbnail(book)})` }}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={(event) => props.onUpdateShelf(book,event.target.value)}>
                              <option value="invalid" disabled>Move to...</option>
                                  <option value="currentlyReading"> Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option> 
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
            )
          }

export default MyBooks;
