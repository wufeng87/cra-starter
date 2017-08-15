import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'

import { Router, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory'


import { syncHistoryWithStore } from 'react-router-redux'

import routes from './routes'

import configureStore from './store/configureStore'

const preloadedState = undefined;

const store = configureStore(preloadedState)

// let
// browserHistory = createBrowserHistory()
// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    {/*<App />*/}

    <BrowserRouter>
      <div style={{ height: "100%" }}>
        <Route path='/' component={App} />
      </div>
    </BrowserRouter>
    {/*<Router history={history} routes={routes} />*/}
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
