import React, { Component } from 'react';
// import axios from 'axios';
import SearchForm from '../components/SearchForm/SearchForm';
import newsApi from '../services/news-api';

// axios.defaults.headers.common['Authorization'] =
// 'Bearer d082869b7f79460ea045ec72443d6f3f';

class ArticlesView extends Component {
  state = {
    articles: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchArticles();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      articles: [],
      error: null,
    });
  };

  fetchArticles = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery };

    this.setState({ isLoading: true });

    newsApi
      .fetchArticles(options)
      .then(articles => {
        this.setState(prevState => ({
          articles: [...prevState.articles, ...articles],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { articles, isLoading, error } = this.state;
    const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;
    return (
      <div>
        <h1>Articles</h1>
        <SearchForm onSubmit={this.onChangeQuery} />

        <ul>
          {articles.map(({ title, url }) => (
            <li key={title}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>
        {error && <h2>Opps! Error!</h2>}

        {isLoading && <h2>...loading</h2>}
        {shouldRenderLoadMoreButton && (
          <button type="button" onClick={this.fetchArticles}>
            More...
          </button>
        )}
      </div>
    );
  }
}

export default ArticlesView;
