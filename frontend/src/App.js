import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';

import { login, logout } from './utils/utils';

import logo from '../public/NFT_Icon.png';
import './App.css';

const App = () => {
  const [ t ] = useTranslation();

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <td className="main-title" >
              <article>
                <h1>{ t( 'HOME_MAIN_TITLE' ) }</h1>
              </article>
            </td>
          </tr>
          <tr>
            <td>
              <img src={ logo } alt="logo" />
            </td>
          </tr>
          <tr>
            <td>
              <Button
                className="btn_home_login"
                onClick={ login }
              >
                <h3> { t( 'HOME_LOGIN_BUTTON' ) } </h3>
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
