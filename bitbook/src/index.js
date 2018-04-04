import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'

import { isAuth } from './app/isAuth'
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css"

M.AutoInit();

ReactDOM.render(
    <HashRouter>
        <Route path="/" component={isAuth()} />
    </HashRouter>,
    document.getElementById('root'));
registerServiceWorker();
