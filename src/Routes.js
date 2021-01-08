import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import LoginAPI from './pages/LoginAPI/LoginAPI';
import Main from './pages/Main/Main';
import State from './pages/State/State';
import Props from './pages/Props/Props';
import MockData from './pages/MockData/MockData';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login-api" component={LoginAPI} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/state" component={State} />
          <Route exact path="/props" component={Props} />
          <Route exact path="/mock-data" component={MockData} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
