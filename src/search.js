import React, {Component} from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import MyBooks from './MyBooks';

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
               
                <MyBooks
                myBooks={this.props.books}
                />
                  </ol>
                </div>
                 </div>
                 </div>
                 </Scrollbars>
                 
        )
    }

}
export default Search;