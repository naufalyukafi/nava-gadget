import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProjectDetailPage from './Projects/ProjectDetailPage';
import ProjectPage from './Projects/ProjectPage';
const LoggedInPage = () => {
  return (
    <Switch>
      <Route exact path="/project" component={ProjectPage} />
      <Route exact path="/project/detail" component={ProjectDetailPage} />
    </Switch>
  );
};

export default LoggedInPage;
