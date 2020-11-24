import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import ProjectPage from "./Projects/ProjectPage"
const LoggedInPage = () => {
    return (
        <Switch>
            <Route path="/project" component={ProjectPage} />
            <Redirect to="/project" />
        </Switch>
    )
}

export default LoggedInPage
