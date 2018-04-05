import React, { Component, Fragment } from 'react';

import { Header } from './common/Header/Header'
import { Main } from './Main'
import { Footer } from './common/Footer'
import M from 'materialize-css'

import './App.css';

class App extends Component {

  componentDidMount() {
    var elem = document.querySelector('.sidenav');
    var instance = M.Sidenav.init(elem);
  }


  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export { App };
