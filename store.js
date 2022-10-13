import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import userSlice from './src/redux/UserSlice';
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
// reducer to login and signup
