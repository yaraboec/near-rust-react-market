import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import App from '../App';

const Router = () => {
  console.log( 1 );
  const { isLoggedIn } = useSelector( ( state ) => state.loginReducer );

  if ( isLoggedIn ) {
  /*  return (
      <Switch>
        <Route path="/" exact component={App} />
        <Redirect to="/" />
      </Switch>
    ); */
  }

  return (
    <Routes>
      <Route path="" element={ <App/> } />
    </Routes>
  );
};

export default Router;
