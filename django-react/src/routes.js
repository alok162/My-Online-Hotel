import React from 'react';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom';
import Login from './components/Login/Login';


export const Routes = () => (
<BrowserRouter>
  <Switch>
      <Route path='/login' component={ Login }/>
  </Switch>
</BrowserRouter>
);