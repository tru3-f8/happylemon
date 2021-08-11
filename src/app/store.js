import { configureStore } from '@reduxjs/toolkit';
import navbarBackgroundReducer from '../features/navbarBackgroundSlice';

export const store = configureStore({
  reducer: {
    navbarBackground: navbarBackgroundReducer,
  },
});
