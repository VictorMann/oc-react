import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function RouteHandle({ children, ...rest }) {

  const logged = true;
  const authorized = (rest.private && !logged) ? false : true;

  return (
    authorized
    ? <Route {...rest}>{children}</Route>
    : <Redirect to="/login" />
  );
}

export default RouteHandle;



