import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import App from '../App';
import MintPage from '../components/mint-page';

const Router = () => {
  const { isLoggedIn } = useSelector( ( state ) => state.loginReducer );

  return (
    <Routes>
      {
        isLoggedIn
          ? <>
            <Route path="/minting" element={ <MintPage/> } />
            <Route path="/" element={ <Navigate to="/minting" /> }/>
          </>
          : <>
            <Route path="/" element={ <App/> } />
            <Route path="" element={ <Navigate to="/" /> }/>
            <Route path="/minting" element={ <Navigate to="/" /> }/>
          </>
      }
    </Routes>
  );
};

export default Router;
