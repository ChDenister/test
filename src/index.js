import './stylesheets/app.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'

import App from './App.js';

import {storeFactory} from "./store";

const store = storeFactory();
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'))

