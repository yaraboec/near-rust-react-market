import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import { login, logout } from '../utils/utils';

import './header.css';

const Header = () => {
  const [ t ] = useTranslation();
  const { isLoggedIn } = useSelector( ( state ) => state.loginReducer );

  return (
    <div className="header">
      {
        !isLoggedIn
          ? <Button className="btn-login" onClick={ login }> { t( 'LOGIN_BUTTON' ) } </Button>
          : <>
            <Button className="btn-logout" onClick={ logout }> { t( 'LOGOUT_BUTTON' ) } </Button>
            <Link to="/minting" >
              <Button className="btn-create-nft">
                { t( 'BTN_CREATE_NFT' ) }
              </Button>
            </Link>
            <Link to="/my-nfts">
              <Button className="btn-my-nft">
                { t( 'BTN_MY_NFT' ) }
              </Button>
            </Link>
            <span
              className="span-greeting"
            >
              { t( 'GREETINGS', { accountId : window.accountId } ) }
            </span>
          </>
      }
    </div>
  );
};

export default Header;