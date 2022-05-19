import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { loginSlice } from '../store/reducers/LoginSlice';

import Router from '../utils/router';
import Header from './header';

const RoutingPage = () => {
  const dispatch = useDispatch();

  const { changeLoginStatus } = loginSlice.actions;

  useEffect( () => {
    const isSignedIn = window.walletConnection.isSignedIn();

    dispatch( changeLoginStatus( isSignedIn ) );
  }, [] );

  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
};

export default RoutingPage;