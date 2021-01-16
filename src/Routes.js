import React from 'react';
import { Switch } from 'react-router-dom';
import RouteHandle from './components/RouteHandle';

import { page } from './helpers';

import Login from './pages/Login';
import Home from './pages/Home';
import QuemSomos from './pages/quem-somos';
import NotFound from './pages/404';

function Routes() {
  return (
    <Switch>
      <RouteHandle exact path={page("/")} component={Home} />
      <RouteHandle exact path={page("login")} component={Login} />
      <RouteHandle exact path={page("quem-somos")} component={QuemSomos} />
      <RouteHandle component={NotFound} />
    </Switch>
  );
}

export default Routes;