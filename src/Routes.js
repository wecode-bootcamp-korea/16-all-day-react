import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import State from './pages/State/State';
import Props from './pages/Props/Props';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/state" component={State} />
          <Route exact path="/props" component={Props} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
