import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Body from './components/Body/Body';
import Signup from './components/Signup/Signup';

export const Routes = () => (
<BrowserRouter>
  <Switch>
      <Route path='/signup' component = { Signup } />
      <Route path='/login' component={ Login }/>
      <Route path='/' component = { Body } />
  </Switch>
</BrowserRouter>
);