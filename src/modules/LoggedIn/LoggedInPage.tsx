import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProjectPage from './Projects/ProjectPage';
const LoggedInPage = () => {
  return (
    <Switch>
      <Route exact path="/project" component={ProjectPage} />
    </Switch>
  );
};

export default LoggedInPage;
