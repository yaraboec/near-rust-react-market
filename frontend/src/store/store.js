import { combineReducers, configureStore } from '@reduxjs/toolkit';

import loginReducer from './reducers/LoginSlice';

const rootReducer = combineReducers( {
  loginReducer,
} );

export const setupStore = () => {
  return configureStore( {
    reducer : rootReducer,
  } );
};