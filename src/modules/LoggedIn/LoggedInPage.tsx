import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ProjectDetailPage from './Projects/ProjectDetailPage';
import ProjectPage from './Projects/ProjectPage';
const LoggedInPage = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/project" component={ProjectPage} />
        <Route exact path="/project/detail" component={ProjectDetailPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default LoggedInPage;
