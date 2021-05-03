import React, { Component } from 'react';
import axios from 'axios';

class BookDetailsView extends Component {
  state = {
    id: null,
    imgUrl: null,
    title: null,
    descr: null,
    genre: null,
    author: null,
  };

  async componentDidMount() {
    const { bookId } = this.props.match.params;
    const { data } = await axios.get(
      `http://localhost:3000/books/${bookId}?_expand=author`,
    );
    this.setState({ ...data });
  }
  render() {
    const { imgUrl, title, descr } = this.state;

    return (
      <>
        <h1>This is Book Detail page </h1>
        <img src={imgUrl} alt={title} />
        <h2>{title}</h2>
        {this.state.author && <p>Author: {this.state.author.name}</p>}
        <p>{descr}</p>
      </>
    );
  }
}

export default BookDetailsView;
