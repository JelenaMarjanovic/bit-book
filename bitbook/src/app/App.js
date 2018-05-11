import React, { Component, Fragment } from 'react';

import { Header } from './common/Header/Header';
import { Main } from './Main';
import { Footer } from './common/Footer';

import M from 'materialize-css';
import './App.css';

class App extends Component {
  componentDidMount() {
    const elem = document.querySelector('.sidenav');
    M.Sidenav.init(elem);
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