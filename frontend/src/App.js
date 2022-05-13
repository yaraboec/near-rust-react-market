import React from 'react';

import { useTranslation } from 'react-i18next';

import { login } from './utils/utils';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const [ t ] = useTranslation();

  if ( !window.walletConnection.isSignedIn() ) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Learn React
          </a>
          <button onClick={ login }> { t( 'LOGIN_BUTTON' ) } </button>
        </header>
      </div>
    );
  }
};

export default App;
