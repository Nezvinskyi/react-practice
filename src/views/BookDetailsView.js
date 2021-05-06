import React, { Component } from 'react';
import axios from 'axios';
import routes from '../routes';

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

  handleGoBack = () => {
    const { history, location } = this.props;
    // if (location.state && location.state.from) {
    //   history.push(location.state.from);
    // }
    // history.push(routes.books);

    history.push(location?.state?.from || routes.books);
  };

  render() {
    const { imgUrl, title, descr, author } = this.state;

    return (
      <div className="container-fluid">
        <button type="button" className="btn" onClick={this.handleGoBack}>
          Back
        </button>
        <img src={imgUrl} alt={title} />
        <h2>{title}</h2>
        {author && <p>Author: {author.name}</p>}
        <p>{descr}</p>
      </div>
    );
  }
}

export default BookDetailsView;
