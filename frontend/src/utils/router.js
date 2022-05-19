import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import App from '../App';
import MintPage from '../components/mint-page';
import MyNFTs from '../components/my-nfts';

const Router = () => {
  const { isLoggedIn } = useSelector( ( state ) => state.loginReducer );

  return (
    <Routes>
      {
        isLoggedIn
          ? <>
            <Route path="/my-nfts" element={ <MyNFTs/> } />
            <Route path="/minting" element={ <MintPage/> } />
            <Route path="/" element={ <Navigate to="/minting" /> }/>
          </>
          : <>
            <Route path="/" element={ <App/> } />
            <Route path="" element={ <Navigate to="/" /> }/>
            <Route path="/minting" element={ <Navigate to="/" /> }/>
            <Route path="/my-nfts" element={ <Navigate to="/" /> }/>
          </>
      }
    </Routes>
  );
};

export default Router;
