import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import AuthorBooks from '../components/AuthorBooks';

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
      <>
        <h1>This is Authors page</h1>
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

              return <AuthorBooks {...props} books={author.books} />;
            }}
          />
        )}
      </>
    );
  }
}

export default AuthorsView;
