import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Page404 from '../../Pages/Page404';

import { routes } from '../routes';

const Content = () => {
  return (
    <div className="content">
      <Suspense fallback={<p>...loading</p>}>
        <Switch>
          {routes.map(({ path, exact, component: Component }) => (
            <Route exact={exact} path={path} key={path} component={Component} />
          ))}
          <Route component={Page404} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
