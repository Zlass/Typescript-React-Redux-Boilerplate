import { createStore, compose, applyMiddleware } from "redux";
import { default as reducer } from "../reducers";
import { createBrowserHistory, History } from "history";
import { routerMiddleware } from "connected-react-router";
import { connectRouter } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { SagaMiddleware } from 'redux-saga'

export const makeStore = (history:History, sagaMiddleware:SagaMiddleware<{}>) =>{
  if (process.env.NODE_ENV === "production") {
    return createStore(
      connectRouter(history)(reducer),
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
      ));
  }
  return createStore(
    connectRouter(history)(reducer),
    composeWithDevTools(applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    )),
  )
};
