import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
// import api from '../middleware/api'
import rootReducer from '../reducers'
// import DevTools from '../containers/DevTools'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      //  applyMiddleware(...middleware),
      // other store enhancers if any
    ),
    // compose(
    //   // applyMiddleware(thunk, api, createLogger()),
    //   // DevTools.instrument()
    // ),
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
