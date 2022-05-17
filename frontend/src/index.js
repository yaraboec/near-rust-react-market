import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { setupStore } from './store/store';
import { initContract } from './utils/utils';

import App from './App';

import './utils/i18n';
import './index.css';

const store = setupStore();

window.nearInitPromise = initContract()
  .then( () => {
    const root = ReactDOM.createRoot( document.getElementById( 'root' ) );

    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
    );
  } ).catch( console.error );
