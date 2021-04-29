import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm/SearchForm';
import newsApi from '../services/news-api';

axios.defaults.headers.common['Authorization'] =
  'Bearer d082869b7f79460ea045ec72443d6f3f';

class ArticlesView extends Component {
  state = {
    articles: [],
    currentPage: 1,
    searchQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchArticles();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, articles: [] });
  };

  fetchArticles = () => {
    const { currentPage, searchQuery } = this.state;
    const options = {
      currentPage,
      searchQuery,
    };
    newsApi.fetchArticles(options).then(response => {
      this.setState(prevState => ({
        articles: [...prevState.articles, ...response.data.articles],
        currentPage: prevState.currentPage + 1,
      }));
    });
  };

  render() {
    const { articles } = this.state;
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
        {articles.length > 0 && (
          <button type="button" onClick={this.fetchArticles}>
            More...
          </button>
        )}
      </div>
    );
  }
}

export default ArticlesView;
