import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { AuthPage } from './modules/Auth';
import { LoggedInPage } from './modules/LoggedIn';
import firebase from "./modules/firebase";

function App() {
  const [firebaseInitialized, setFirebaseInitialized] = React.useState(false);

  React.useEffect(() => {
    firebase.isInitialized().then((val: React.SetStateAction<boolean>) => {
      setFirebaseInitialized(val)
    })
  })
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={AuthPage} />
        <Route path="/project" component={LoggedInPage} />
        <Redirect push to="/auth" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
