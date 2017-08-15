import React from 'react'
import { Route } from 'react-router'

import App from './App';

import TodoApp from './containers/TodoApp'
// import UserPage from './containers/UserPage'
// import RepoPage from './containers/RepoPage'

export default <Route path="/" component={App}>
  <Route path="/todo"
         component={TodoApp} />
  <Route path="/:login"
         component={TodoApp} />
</Route>
