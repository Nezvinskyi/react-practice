import { lazy } from 'react';

const HomePage = lazy(() =>
  import('../Pages/HomePage' /* webpackChunkName: "home-page" */),
);
const Products = lazy(() =>
  import('../Pages/Products' /* webpackChunkName: "Products-page" */),
);
const Contacts = lazy(() =>
  import('../Pages/Contacts' /* webpackChunkName: "Contacts-page" */),
);
const Counters = lazy(() =>
  import('../Pages/Counters' /* webpackChunkName: "Counters-page" */),
);
const LifeCycleTest = lazy(() =>
  import('../Pages/LifeCycleTest' /* webpackChunkName: "LifeCycleTest-page" */),
);
const MovieSearch = lazy(() =>
  import('../Pages/MovieSearch' /* webpackChunkName: "MovieSearch-page" */),
);
const MovieDetails = lazy(() =>
  import('../Pages/MovieDetails' /* webpackChunkName: "MovieDetails-page" */),
);

export const routes = [
  {
    path: '/',
    label: 'Home Page',
    component: HomePage,
    exact: true,
  },
  {
    path: '/products',
    label: 'Products',
    component: Products,
  },
  {
    path: '/contacts',
    label: 'Contacts',
    component: Contacts,
  },
  {
    path: '/counters',
    label: 'Counters',
    component: Counters,
  },
  {
    path: '/life-cycle-test',
    label: 'Life Cycle Test',
    component: LifeCycleTest,
  },
  {
    path: '/movie-search/:id',
    label: 'Movie Details',
    component: MovieDetails,
  },
  {
    path: '/movie-search',
    label: 'Movie Search',
    component: MovieSearch,
  },
];
