import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
  'Bearer d082869b7f79460ea045ec72443d6f3f';

const fetchArticles = ({ searchQuery = '', currentPage = 1, pageSize = 5 }) => {
  return axios.get(
    `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`,
  );
};

export default { fetchArticles };
