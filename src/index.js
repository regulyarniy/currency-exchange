import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import appReducer from "./store";
import {composeWithDevTools} from "redux-devtools-extension";

const middleware = applyMiddleware(thunk);
const store = createStore(appReducer, composeWithDevTools(middleware));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById(`root`));
