import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Counter from './components/Counter';
import TodosView from './views/TodosView';

const App = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/todos">Todo</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/counter" component={Counter} />
      <Route path="/todos" component={TodosView} />
    </Switch>
  </>
);

export default App;
