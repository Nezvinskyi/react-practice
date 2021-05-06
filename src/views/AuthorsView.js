import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import BookList from '../components/BookList';

class AuthorsView extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const { data } = await axios.get(
      'http://localhost:3000/authors?_embed=books',
    );
    this.setState({ authors: data });
  }
  render() {
    return (
      <div className="container-fluid">
        <ul>
          {this.state.authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${this.props.match.url}/${author.id}`}>
                {author.name}{' '}
              </NavLink>
            </li>
          ))}
        </ul>

        {this.state.authors.length > 0 && (
          <Route
            path={`${this.props.match.path}/:authorId`}
            render={props => {
              const bookId = Number(props.match.params.authorId);
              const author = this.state.authors.find(
                author => author.id === bookId,
              );

              return (
                <>
                  <h2>Author's books: {author.name}</h2>
                  <BookList {...props} books={author.books} />
                </>
              );
            }}
          />
        )}
      </div>
    );
  }
}

export default AuthorsView;
