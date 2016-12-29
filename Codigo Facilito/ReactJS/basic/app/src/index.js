import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRouter, hashHistory} from 'react-router';

import Home from './routes/Home';
import Store from './routes/Store';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Home}></Route>
    <Route path='store' component={Store}></Route>
  </Router>
, app);
