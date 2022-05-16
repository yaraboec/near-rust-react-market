import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { initContract } from './utils/utils';

import './utils/i18n';
import './index.css';

window.nearInitPromise = initContract()
  .then( () => {
    const root = ReactDOM.createRoot( document.getElementById('root') );

    root.render(
      <React.StrictMode>
          <App />
      </React.StrictMode>
    );
  } ).catch( console.error );
