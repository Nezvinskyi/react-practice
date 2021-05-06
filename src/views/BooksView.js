import React, { Component } from 'react';
import axios from 'axios';
import BookList from '../components/BookList';

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
      <div className="container-fluid">
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default BooksView;
