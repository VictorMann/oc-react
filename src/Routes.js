import React from 'react';
import { Switch } from 'react-router-dom';
import RouteHandle from './components/RouteHandle';

import { page } from './helpers';

import Login from './pages/Login';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import PoliticaPriv from './pages/PoliticaPrivacidade';
import TrabalheConosco from './pages/TrabalheConosco';
import PoliticaTroca from './pages/PoliticaTroca';
import NotFound from './pages/404';

function Routes() {
  return (
    <Switch>
      <RouteHandle exact path={page("/")} component={Home} />
      <RouteHandle path={page("login")} component={Login} />
      <RouteHandle path={page("quem-somos")} component={QuemSomos} />
      <RouteHandle path={page("trabalhe-conosco")} component={TrabalheConosco} />
      <RouteHandle path={page("politica-de-privacidade")} component={PoliticaPriv} />
      <RouteHandle path={page("politica-de-troca")} component={PoliticaTroca} />
      <RouteHandle component={NotFound} />
    </Switch>
  );
}

export default Routes;