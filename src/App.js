import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
// import HomeView from './views/HomeView';
// import AuthorsView from './views/AuthorsView';
// import BooksView from './views/BooksView';
// import BookDetailsView from './views/BookDetailsView';
import NotFoundView from './views/NotFoundView';
import routes from './routes';
import AppBar from './components/AppBar/AppBar';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */),
);
const AuthorsView = lazy(() =>
  import('./views/AuthorsView' /* webpackChunkName: "authors-view" */),
);
const BooksView = lazy(() =>
  import('./views/BooksView' /* webpackChunkName: "books-view" */),
);
const BookDetailsView = lazy(() =>
  import('./views/BookDetailsView' /* webpackChunkName: "book-details-view" */),
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>...loading</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route path={routes.authors} component={AuthorsView} />
        <Route exact path={routes.books} component={BooksView} />
        <Route path={routes.bookDetails} component={BookDetailsView} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
