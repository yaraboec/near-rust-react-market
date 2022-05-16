import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { login, logout } from './utils/utils';

import './App.css';

const App = () => {
  const [ t ] = useTranslation();

  const [ number, setNumber ] = useState();

  const isSignedIn = window.walletConnection.isSignedIn();

  useEffect( () => {
    if ( isSignedIn ) {
      window.contract.get_num()
        .then( ( num ) => setNumber( num ) )
        .catch( console.log );
    }
  }, [] );

  return (
    <div className="App">
      <header className="App-header">
        {
          !isSignedIn
            ? <button
              onClick={ login }>
              { t( 'LOGIN_BUTTON' ) }
            </button>
            : <button onClick={ () => logout }> { t( 'LOGOUT_BUTTON' ) } { number } </button>
        }
      </header>
    </div>
  );
};

export default App;
