import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

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
          ? <Button
            className="btn-login"
            onClick={ login }>
            { t( 'LOGIN_BUTTON' ) }
          </Button>
          : <div>
            <Button className="btn-logout" onClick={ logout }> { t( 'LOGOUT_BUTTON' ) } </Button>
          </div>
      }
    </div>
  );
};

export default Header;