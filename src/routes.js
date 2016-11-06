import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import JokesIndex  from './components/jokes_index';
import JokeNew from './components/jokes_new.js';
import JokeShow from './components/joke_show.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={JokesIndex} />
    <Route path="joke/new" component={JokeNew} />
    <Route path="joke/:id" component={JokeShow} />
  </Route>
);
