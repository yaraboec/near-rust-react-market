import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { setupStore } from './store/store';
import { initContract } from './utils/utils';

import RoutingPage from './components/routing-page';

import './utils/i18n';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = setupStore();

window.nearInitPromise = initContract()
  .then( () => {
    const root = ReactDOM.createRoot( document.getElementById( 'root' ) );

    root.render(
      <Provider store={store}>
        <RoutingPage />
      </Provider>,
    );
  } ).catch( console.error );
