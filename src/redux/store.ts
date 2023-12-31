import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import assetReducer from './features/assetSlice';
import authReducer from './features/authSlice';
import citiesReducer from './features/citySlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    assets: assetReducer,
    auth: authReducer,
    cities: citiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
