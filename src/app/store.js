import { configureStore } from '@reduxjs/toolkit';
import navbarBackgroundReducer from '../features/navbarBackgroundSlice';
import contactFormReducer from '../features/contactFormSlice';

export const store = configureStore({
  reducer: {
    navbarBackground: navbarBackgroundReducer,
    contact: contactFormReducer,
  },
});
