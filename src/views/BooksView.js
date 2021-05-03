import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BooksView extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const { data } = await axios.get('http://localhost:3000/books');
    this.setState({ books: data });
  }
  render() {
    return (
      <>
        <h1>This is Books page</h1>
        <ul>
          {this.state.books.map(book => (
            <li key={book.id}>
              {
                <Link to={`${this.props.match.url}/${book.id}`}>
                  {book.title}
                </Link>
              }{' '}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default BooksView;
