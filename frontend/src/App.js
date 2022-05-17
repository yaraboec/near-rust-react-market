import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { loginSlice } from './store/reducers/LoginSlice';
import { login, logout } from './utils/utils';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const [ t ] = useTranslation();

  const { isLoggedIn } = useSelector( ( state ) => state.loginReducer );
  const { changeLoginStatus } = loginSlice.actions;

  useEffect( () => {
    const isSignedIn = window.walletConnection.isSignedIn();

    dispatch( changeLoginStatus( isSignedIn ) );

    if ( isSignedIn ) {
      console.log( 1 );
    }
  }, [] );

  return (
    <div className="App">
      {
        !isLoggedIn
          ? <button onClick={ login }> { t( 'LOGIN_BUTTON' ) } </button>
          : <button onClick={ logout }> { t( 'LOGOUT_BUTTON' ) } </button>
      }
    </div>
  );
};

export default App;
