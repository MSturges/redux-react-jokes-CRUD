import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import JokeIndex  from './components/jokes_index';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={JokeIndex} />
  </Route>
);
