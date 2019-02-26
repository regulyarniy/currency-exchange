import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import appReducer from "./store";
import {composeWithDevTools} from "redux-devtools-extension";
import {saveLocalState} from "./utils";

const middleware = applyMiddleware(thunk);
const store = createStore(appReducer, composeWithDevTools(middleware));

store.subscribe(() => {
  saveLocalState({favorites: store.getState().favorites})
});

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById(`root`));
