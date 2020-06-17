import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home/index';
import Users from './pages/users/users';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/users" exact component={Users}/>
      </Switch>
    </BrowserRouter>
  )
} 