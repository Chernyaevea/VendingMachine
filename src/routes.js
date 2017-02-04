import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Api from './components/api'


export default (
<Route path="/">
  <IndexRoute component={App} />
  <Route path="api" component={Api} />
</Route>
);