import React from 'react';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Body from './components/Body/Body';

export const Routes = () => (
<BrowserRouter>
  <Switch>
      <Route path='/login' component={ Login }/>
      <Route path='/' component={ Body }/> 
  </Switch>
</BrowserRouter>
);