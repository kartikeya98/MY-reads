import React ,{Component} from  'react';

import MyBooks from './MyBooks';


class BooksList extends Component {


    render() {
        const curentlyReadingBooks = this.props.myBooks.filter(book => book.shelf === 'currentlyReading');
        const readBooks = this.props.myBooks.filter(book => book.shelf === 'read');
        const wantToReadBooks = this.props.myBooks.filter(book => book.shelf === 'wantToRead');
          
        return (
            <div>
        
                 <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
                <MyBooks 
                    onUpdateShelf={this.props.onUpdateShelf}
                    myBooks={curentlyReadingBooks}
                />

            </div>
            
        
            <div className="bookshelf">
            <h2 className="bookshelf-title">wantToRead</h2>
                <MyBooks 
                    onUpdateShelf={this.props.onUpdateShelf}
                    myBooks={wantToReadBooks}
                />
                
            </div>
    
            
            <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
                <MyBooks 
                    onUpdateShelf={this.props.onUpdateShelf}
                    myBooks={readBooks}
            
                />
                
            </div>
            
        
            
            
            </div>
        )
    }


}

export default BooksList;