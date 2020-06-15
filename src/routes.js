import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </BrowserRouter>
  )
} 