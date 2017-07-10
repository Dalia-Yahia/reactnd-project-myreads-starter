import React, {Component} from 'react'
import Book from './Book'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  render () {
    return (
      <div>
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.sort(sortBy('title'))
                  .filter(book => book.shelf === "currentlyReading")
                  .map(book => (
                    <Book 
                      onMoveBook={this.props.onMoveBook}
                      key={book.id} book={book}
                    />
                  ))
                }
              </ol>
            </div>
          </div>
        </div>
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want To Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.sort(sortBy('title'))
                  .filter(book => book.shelf === "wantToRead")
                  .map(book => (
                    <Book 
                      onMoveBook={this.props.onMoveBook}
                      key={book.id} book={book}
                    />
                  ))
                }
              </ol>
            </div>
          </div>
        </div>
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
             <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.sort(sortBy('title'))
                  .filter(book => book.shelf === "read")
                  .map(book => (
                    <Book 
                      onMoveBook={this.props.onMoveBook}
                      key={book.id} book={book}
                    />
                  ))
                }
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Bookshelf