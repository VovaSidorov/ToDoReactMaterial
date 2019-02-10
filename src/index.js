import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home'

import 'typeface-roboto';

import {createStore} from "redux";
import {Provider} from 'react-redux';
import {reducer} from "./store/reducer";

export const ADD_NEW_TASK = "ADD_NEW_TASK";
export const DONE_TASK = "DONE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
