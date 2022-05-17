import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn : false,
};

export const loginSlice = createSlice( {
  name : 'login',
  initialState,
  reducers : {
    changeLoginStatus( state, action ) {
      state.isLoggedIn = action.payload;
    },
  },
} );

export default loginSlice.reducer;