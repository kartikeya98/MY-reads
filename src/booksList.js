import React  from  'react';

import MyBooks from './MyBooks';


const BooksList = (props) => {

        const curentlyReadingBooks = props.myBooks.filter(book => book.shelf === 'currentlyReading');
        const readBooks = props.myBooks.filter(book => book.shelf === 'read');
        const wantToReadBooks = props.myBooks.filter(book => book.shelf === 'wantToRead');

        this.checkThumbnail = (book) => {
            if(book.imageLinks) {
                return book.imageLinks.thumbnail;
            }
            else {
                return 'no image'
            }
            }
          
        return (
            <div>
        
                 <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
                <MyBooks 
                    onUpdateShelf={props.onUpdateShelf}
                    myBooks={curentlyReadingBooks}
                    checkThumbnail={this.checkThumbnail}

                />

            </div>
            
        
            <div className="bookshelf">
            <h2 className="bookshelf-title">wantToRead</h2>
                <MyBooks 
                    onUpdateShelf={props.onUpdateShelf}
                    myBooks={wantToReadBooks}
                    checkThumbnail={this.checkThumbnail}
                />
                
            </div>
    
            
            <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
                <MyBooks 
                    onUpdateShelf={props.onUpdateShelf}
                    myBooks={readBooks}
                    checkThumbnail={this.checkThumbnail}

            
                />
                
            </div>
            
        
            
            
            </div>
        )
    }




export default BooksList;