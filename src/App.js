import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ArticlesView from './views/ArticlesView';
import TodosView from './views/TodosView';

const App = () => (
  <>
    <ul>
      <li>
        <Link to="/todos">Todos</Link>
      </li>
      <li>
        <Link to="/articles">Articles</Link>
      </li>
    </ul>

    <Switch>
      <Route path="/todos">
        <TodosView />
      </Route>

      <Route path="/articles">
        <ArticlesView />
      </Route>
    </Switch>
  </>
);

export default App;
