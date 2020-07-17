import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import AdminTable from '../admin/AdminTable';
import Game from '../player/Game';
const Routes = props => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={AdminTable}/>
        <Route exact path="/game" component= {Game}/>
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
