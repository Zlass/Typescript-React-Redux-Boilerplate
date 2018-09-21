import React from 'react';
import { Provider } from "react-redux";
import { hot } from 'react-hot-loader';
import { makeStore } from './store';
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { ConnectedRouter } from "connected-react-router";
import Routes from './routes';

const HISTORY = createBrowserHistory();
const SAGA_MIDDLEWARE = createSagaMiddleware();
const STORE = makeStore(HISTORY, SAGA_MIDDLEWARE);
// SAGA_MIDDLEWARE.run();

const App = () =>(
  <Provider store={STORE} >
    <ConnectedRouter history={HISTORY}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

export default hot(module)(App);
