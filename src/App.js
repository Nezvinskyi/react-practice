import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';
import NotFoundView from './views/NotFoundView';
import BookDetailsView from './views/BookDetailsView';
import routes from './routes';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          to={routes.home}
          exact
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.authors}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Authors
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.books}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Books
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path={routes.home} component={HomeView} />
      <Route path={routes.authors} component={AuthorsView} />
      <Route exact path={routes.books} component={BooksView} />
      <Route path={routes.bookDetails} component={BookDetailsView} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
